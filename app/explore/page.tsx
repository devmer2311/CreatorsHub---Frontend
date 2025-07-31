'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, Filter, Users, MapPin, Star } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CreatorCard from '@/components/CreatorCard';
import Loader from '@/components/Loader';
import { creators } from '@/data/creators';
import type { Creator } from '@/data/creators';

export default function ExplorePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [filteredCreators, setFilteredCreators] = useState<Creator[]>(creators);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilters, setShowFilters] = useState(false);

  // Get all unique skills and locations
  const allSkills = Array.from(new Set(creators.flatMap(creator => creator.skills)));
  const allLocations = Array.from(new Set(creators.map(creator => creator.location)));

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = creators;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(creator =>
        creator.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        creator.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        creator.skills.some(skill => 
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    }

    // Filter by skills
    if (selectedSkills.length > 0) {
      filtered = filtered.filter(creator =>
        selectedSkills.some(skill => creator.skills.includes(skill))
      );
    }

    // Filter by location
    if (selectedLocation) {
      filtered = filtered.filter(creator => creator.location === selectedLocation);
    }

    setFilteredCreators(filtered);
  }, [searchTerm, selectedSkills, selectedLocation]);

  const handleSkillToggle = (skill: string) => {
    setSelectedSkills(prev =>
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedSkills([]);
    setSelectedLocation('');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Loader size="lg" text="Loading amazing creators..." />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Discover Amazing Creators
            </h1>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Connect with talented designers, developers, and creative professionals 
              from around the world. Find your next team member or collaborator.
            </p>
            
            <div className="flex items-center justify-center">
              <div className="flex items-center space-x-2 text-blue-100">
                <Users className="w-5 h-5" />
                <span className="text-lg font-medium">{creators.length} Creators</span>
                <span className="mx-2">•</span>
                <Star className="w-5 h-5" />
                <span className="text-lg font-medium">Top Rated</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by name, skills, or role..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            {/* Filter Toggle */}
            <Button
              variant="outline"
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden"
            >
              <Filter className="w-4 h-4 mr-2" />
              Filters
              {(selectedSkills.length > 0 || selectedLocation) && (
                <Badge className="ml-2 bg-blue-600">
                  {selectedSkills.length + (selectedLocation ? 1 : 0)}
                </Badge>
              )}
            </Button>

            {/* Clear Filters */}
            {(searchTerm || selectedSkills.length > 0 || selectedLocation) && (
              <Button variant="ghost" onClick={clearFilters}>
                Clear All
              </Button>
            )}
          </div>

          {/* Filters */}
          <div className={`overflow-hidden transition-all duration-300 ${showFilters ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 lg:max-h-96 lg:opacity-100'}`}>
            <div className="pt-6 space-y-4">
              {/* Skills Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {allSkills.slice(0, 8).map(skill => (
                    <button
                      key={skill}
                      onClick={() => handleSkillToggle(skill)}
                      className={`px-3 py-1 text-sm rounded-full border transition-colors ${
                        selectedSkills.includes(skill)
                          ? 'bg-blue-600 text-white border-blue-600'
                          : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-blue-300'
                      }`}
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              </div>

              {/* Location Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Location</h3>
                <div className="flex flex-wrap gap-2">
                  {allLocations.map(location => (
                    <button
                      key={location}
                      onClick={() => setSelectedLocation(
                        selectedLocation === location ? '' : location
                      )}
                      className={`px-3 py-1 text-sm rounded-full border transition-colors flex items-center ${
                        selectedLocation === location
                          ? 'bg-purple-600 text-white border-purple-600'
                          : 'bg-gray-100 text-gray-700 border-gray-200 hover:border-purple-300'
                      }`}
                    >
                      <MapPin className="w-3 h-3 mr-1" />
                      {location}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {filteredCreators.length} Creator{filteredCreators.length !== 1 ? 's' : ''} Found
              </h2>
              {(searchTerm || selectedSkills.length > 0 || selectedLocation) && (
                <p className="text-gray-600 mt-1">
                  Showing results for your search and filters
                </p>
              )}
            </div>
          </div>

          {/* Creators Grid */}
          {filteredCreators.length > 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredCreators.map((creator, index) => (
                <motion.div
                  key={creator.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <CreatorCard creator={creator} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-gray-400" />
              </div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">
                No creators found
              </h3>
              <p className="text-gray-600 mb-6">
                Try adjusting your search terms or filters
              </p>
              <Button onClick={clearFilters} variant="outline">
                Clear All Filters
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}