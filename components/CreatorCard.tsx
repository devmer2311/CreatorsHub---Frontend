'use client';

import { motion } from 'framer-motion';
import { MapPin, Star, Users, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Creator } from '@/data/creators';
import { useRouter } from 'next/navigation';

interface CreatorCardProps {
  creator: Creator;
  variant?: 'default' | 'compact';
}

export default function CreatorCard({ creator, variant = 'default' }: CreatorCardProps) {
  const router = useRouter();

  const handleViewProfile = () => {
    router.push(`/profile/${creator.id}`);
  };

  const handleHireMe = () => {
    // In a real app, this would open a contact modal or redirect to a hire form
    alert(`Hire ${creator.name} - This would open a contact form!`);
  };

  if (variant === 'compact') {
    return (
      <motion.div
        whileHover={{ y: -4, scale: 1.02 }}
        transition={{ duration: 0.2 }}
        className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg cursor-pointer"
        onClick={handleViewProfile}
      >
        <div className="flex items-center space-x-3">
          <img
            src={creator.avatar}
            alt={creator.name}
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-gray-900 truncate">{creator.name}</h3>
            <p className="text-sm text-gray-600 truncate">{creator.title}</p>
          </div>
          {creator.verified && (
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
          )}
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-xl group"
    >
      {/* Banner */}
      <div className="relative h-32 bg-gradient-to-r from-blue-500 to-purple-600 overflow-hidden">
        <img
          src={creator.banner}
          alt=""
          className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        
        {/* Verified Badge */}
        {creator.verified && (
          <div className="absolute top-3 right-3">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-1.5">
              <Star className="w-4 h-4 text-white fill-current" />
            </div>
          </div>
        )}
      </div>

      {/* Profile Section */}
      <div className="relative px-6 pt-0 pb-6">
        {/* Avatar */}
        <div className="flex justify-center -mt-8 mb-4">
          <div className="relative">
            <img
              src={creator.avatar}
              alt={creator.name}
              className="w-16 h-16 rounded-full border-4 border-white object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white" />
          </div>
        </div>

        {/* Info */}
        <div className="text-center mb-4">
          <h3 className="text-lg font-bold text-gray-900 mb-1">{creator.name}</h3>
          <p className="text-sm text-gray-600 mb-2">{creator.title}</p>
          <div className="flex items-center justify-center text-xs text-gray-500 mb-3">
            <MapPin className="w-3 h-3 mr-1" />
            {creator.location}
          </div>
        </div>

        {/* Stats */}
        <div className="flex justify-center space-x-6 mb-4 text-sm">
          <div className="text-center">
            <div className="flex items-center justify-center text-gray-600">
              <Users className="w-4 h-4 mr-1" />
              <span className="font-medium">{creator.followers}</span>
            </div>
            <div className="text-xs text-gray-500">Followers</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center text-gray-600">
              <Eye className="w-4 h-4 mr-1" />
              <span className="font-medium">{creator.projects}</span>
            </div>
            <div className="text-xs text-gray-500">Projects</div>
          </div>
        </div>

        {/* Skills */}
        <div className="flex flex-wrap justify-center gap-1 mb-4">
          {creator.skills.slice(0, 3).map((skill) => (
            <Badge key={skill} variant="secondary" className="text-xs">
              {skill}
            </Badge>
          ))}
          {creator.skills.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{creator.skills.length - 3}
            </Badge>
          )}
        </div>

        {/* Bio */}
        <p className="text-sm text-gray-600 text-center mb-6 line-clamp-2">
          {creator.bio}
        </p>

        {/* Actions */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={handleViewProfile}
            className="flex-1 border-gray-300 hover:border-blue-500 hover:text-blue-600"
          >
            View Portfolio
          </Button>
          <Button
            size="sm"
            onClick={handleHireMe}
            className="flex-1 bg-blue-600 hover:bg-blue-700"
          >
            Hire Me
          </Button>
        </div>
      </div>
    </motion.div>
  );
}