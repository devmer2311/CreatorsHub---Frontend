'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { 
  MapPin, 
  Star, 
  Users, 
  Eye, 
  ExternalLink, 
  Mail,
  Share2,
  MoreHorizontal,
  Calendar,
  Award,
  Plus
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PostCard from '@/components/PostCard';
import Loader from '@/components/Loader';
import { posts } from '@/data/posts';
import { getCurrentUser } from '@/lib/auth';
import type { Creator } from '@/data/creators';

interface ProfileClientProps {
  creator: Creator | null;
  isOwnProfile: boolean;
  profileId: string;
}

export default function ProfileClient({ creator, isOwnProfile: initialIsOwnProfile, profileId }: ProfileClientProps) {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isFollowing, setIsFollowing] = useState(false);
  const [isOwnProfile, setIsOwnProfile] = useState(initialIsOwnProfile);

  useEffect(() => {
    // Check if user is logged in and if this is their profile
    const currentUser = getCurrentUser();
    if (currentUser && (profileId === 'current-user' || profileId === currentUser.id)) {
      setIsOwnProfile(true);
    }
    
    // Simulate loading delay for smooth UX
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [profileId]);

  const handleHire = () => {
    if (creator) {
      alert(`Contact ${creator.name} - This would open a contact form or messaging system!`);
    }
  };

  const handleFollow = () => {
    setIsFollowing(!isFollowing);
  };

  const handleShare = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      alert('Profile link copied to clipboard!');
    } else {
      alert('Profile link: ' + window.location.href);
    }
  };

  const handleEditProfile = () => {
    alert('Edit profile functionality would be implemented here');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Loader size="lg" text="Loading profile..." />
      </div>
    );
  }

  if (!creator) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Users className="w-8 h-8 text-gray-400" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Profile Not Found</h1>
          <p className="text-gray-600 mb-8">The creator profile you're looking for doesn't exist.</p>
          <Button onClick={() => router.push('/explore')}>
            Browse All Creators
          </Button>
        </div>
        <Footer />
      </div>
    );
  }

  // Get posts for this creator
  const creatorPosts = posts.filter(post => post.creatorId === creator.id);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Banner */}
      <div className="relative h-64 lg:h-80 overflow-hidden">
        <img
          src={creator.banner}
          alt={`${creator.name}'s banner`}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button
            size="sm"
            variant="secondary"
            onClick={handleShare}
            className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30"
          >
            <Share2 className="w-4 h-4" />
          </Button>
          <Button
            size="sm"
            variant="secondary"
            className="bg-white/20 backdrop-blur-sm text-white border-white/20 hover:bg-white/30"
          >
            <MoreHorizontal className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* Profile Header */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
        >
          <div className="p-6 lg:p-8">
            <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-8">
              {/* Avatar and Basic Info */}
              <div className="flex flex-col items-center lg:items-start">
                <div className="relative mb-4">
                  <img
                    src={creator.avatar}
                    alt={creator.name}
                    className="w-32 h-32 rounded-full border-4 border-white object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 w-10 h-10 bg-green-500 rounded-full border-4 border-white" />
                  {creator.verified && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <Star className="w-4 h-4 text-white fill-current" />
                    </div>
                  )}
                </div>

                {/* Mobile Actions */}
                <div className="flex space-x-3 lg:hidden mb-6">
                  {isOwnProfile ? (
                    <Button onClick={handleEditProfile} size="sm" className="bg-blue-600 hover:bg-blue-700">
                      Edit Profile
                    </Button>
                  ) : (
                    <>
                      <Button
                        onClick={handleFollow}
                        variant={isFollowing ? "outline" : "default"}
                        size="sm"
                      >
                        {isFollowing ? 'Following' : 'Follow'}
                      </Button>
                      <Button onClick={handleHire} size="sm" className="bg-blue-600 hover:bg-blue-700">
                        Contact
                      </Button>
                    </>
                  )}
                </div>
              </div>

              {/* Main Info */}
              <div className="flex-1 text-center lg:text-left">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">
                      {creator.name}
                      {isOwnProfile && (
                        <Badge variant="secondary" className="ml-3 text-xs">
                          You
                        </Badge>
                      )}
                    </h1>
                    <p className="text-xl text-gray-600 mb-3">{creator.title}</p>
                    <div className="flex items-center justify-center lg:justify-start text-gray-500 mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      {creator.location}
                    </div>
                  </div>

                  {/* Desktop Actions */}
                  <div className="hidden lg:flex space-x-3">
                    {isOwnProfile ? (
                      <Button onClick={handleEditProfile} className="bg-blue-600 hover:bg-blue-700">
                        Edit Profile
                      </Button>
                    ) : (
                      <>
                        <Button
                          onClick={handleFollow}
                          variant={isFollowing ? "outline" : "default"}
                        >
                          {isFollowing ? 'Following' : 'Follow'}
                        </Button>
                        <Button onClick={handleHire} className="bg-blue-600 hover:bg-blue-700">
                          <Mail className="w-4 h-4 mr-2" />
                          Contact
                        </Button>
                      </>
                    )}
                  </div>
                </div>

                {/* Stats */}
                <div className="flex justify-center lg:justify-start space-x-8 mb-6">
                  <div className="text-center">
                    <div className="flex items-center justify-center text-gray-900">
                      <Users className="w-4 h-4 mr-1" />
                      <span className="font-bold text-lg">{creator.followers.toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-gray-500">Followers</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-gray-900">
                      <span className="font-bold text-lg">{creator.following.toLocaleString()}</span>
                    </div>
                    <div className="text-sm text-gray-500">Following</div>
                  </div>
                  <div className="text-center">
                    <div className="flex items-center justify-center text-gray-900">
                      <Eye className="w-4 h-4 mr-1" />
                      <span className="font-bold text-lg">{creator.portfolio.length}</span>
                    </div>
                    <div className="text-sm text-gray-500">Projects</div>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-gray-700 leading-relaxed mb-6 max-w-3xl">
                  {creator.bio}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
                  {creator.skills.map((skill) => (
                    <Badge key={skill} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Content Tabs */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="projects" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="projects">
              Projects ({creator.portfolio.length})
            </TabsTrigger>
            <TabsTrigger value="posts">
              Posts ({creatorPosts.length})
            </TabsTrigger>
            <TabsTrigger value="saved">
              Saved ({creator.saved})
            </TabsTrigger>
          </TabsList>

          {/* Portfolio Tab */}
          <TabsContent value="projects">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {creator.portfolio.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-8">
                  {creator.portfolio.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                            <ExternalLink className="w-4 h-4 text-gray-700" />
                          </div>
                        </div>
                        <div className="absolute top-4 left-4">
                          <Badge variant="secondary" className="text-xs bg-white/90 text-gray-800">
                            {project.year}
                          </Badge>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <Badge variant="secondary" className="text-xs">
                            {project.category}
                          </Badge>
                          {project.client && (
                            <span className="text-xs text-gray-500">{project.client}</span>
                          )}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                          {project.technologies.length > 3 && (
                            <Badge variant="outline" className="text-xs">
                              +{project.technologies.length - 3}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    No projects yet
                  </h3>
                  <p className="text-gray-600">
                    {isOwnProfile 
                      ? "Start building your portfolio by adding your first project."
                      : "This creator hasn't added any portfolio projects yet."
                    }
                  </p>
                  {isOwnProfile && (
                    <Button className="mt-4" onClick={() => alert('Add project functionality would be implemented here')}>
                      <Plus className="w-4 h-4 mr-2" />
                      Add Project
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          </TabsContent>

          {/* Posts Tab */}
          <TabsContent value="posts">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {creatorPosts.length > 0 ? (
                <div className="space-y-6">
                  {creatorPosts.map((post, index) => (
                    <PostCard key={post.id} post={post} index={index} />
                  ))}
                </div>
              ) : (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-medium text-gray-900 mb-2">
                    No posts yet
                  </h3>
                  <p className="text-gray-600">
                    {isOwnProfile 
                      ? "Share your thoughts, projects, and insights with the community."
                      : "This creator hasn't shared any posts yet."
                    }
                  </p>
                  {isOwnProfile && (
                    <Button className="mt-4" onClick={() => alert('Create post functionality would be implemented here')}>
                      <Plus className="w-4 h-4 mr-2" />
                      Create Post
                    </Button>
                  )}
                </div>
              )}
            </motion.div>
          </TabsContent>

          {/* Saved Tab */}
          <TabsContent value="saved">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-medium text-gray-900 mb-2">
                  {isOwnProfile ? 'Your Saved Items' : 'Saved Items'}
                </h3>
                <p className="text-gray-600">
                  {isOwnProfile 
                    ? "Posts and projects you've saved will appear here."
                    : "This section is private to the user."
                  }
                </p>
              </div>
            </motion.div>
          </TabsContent>
        </Tabs>
      </div>

      {/* Experience Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-xl p-8"
        >
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Experience</h2>
            {isOwnProfile && (
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => alert('Add experience functionality would be implemented here')}
              >
                <Plus className="w-4 h-4 mr-2" />
                Add Experience
              </Button>
            )}
          </div>
          
          {creator.experience.length > 0 ? (
            <div className="space-y-6">
              {creator.experience.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="border-l-4 border-blue-600 pl-6 pb-6 last:pb-0"
                >
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">
                        {exp.role}
                      </h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {exp.duration}
                    </Badge>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Calendar className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">
                No experience listed
              </h3>
              <p className="text-gray-600">
                {isOwnProfile 
                  ? "Add your work experience to showcase your professional journey."
                  : "This creator hasn't added their work experience yet."
                }
              </p>
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}