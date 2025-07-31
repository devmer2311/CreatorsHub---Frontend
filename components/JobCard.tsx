'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Building, Briefcase } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import type { Job } from '@/data/jobs';

interface JobCardProps {
  job: Job;
  index?: number;
}

export default function JobCard({ job, index = 0 }: JobCardProps) {
  const handleApply = () => {
    alert(`Apply to ${job.title} at ${job.company} - This would open an application form!`);
  };

  const getTimeSince = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInDays = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60 * 24));
    
    if (diffInDays === 0) return 'Today';
    if (diffInDays === 1) return '1 day ago';
    return `${diffInDays} days ago`;
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time': return 'bg-green-100 text-green-800';
      case 'Part-time': return 'bg-blue-100 text-blue-800';
      case 'Contract': return 'bg-purple-100 text-purple-800';
      case 'Freelance': return 'bg-orange-100 text-orange-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
    >
      {/* Featured Badge */}
      <div className="flex justify-between items-start mb-4">
        <Badge variant="secondary" className="text-xs bg-green-100 text-green-800">
          Featured
        </Badge>
        <div className="flex items-center text-xs text-gray-500">
          <Clock className="w-3 h-3 mr-1" />
          {getTimeSince(job.postedDate)}
        </div>
      </div>

      {/* Header */}
      <div className="flex items-start space-x-4 mb-4">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center overflow-hidden">
            <img
              src={job.companyLogo}
              alt={`${job.company} logo`}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1">{job.title}</h3>
            <div className="flex items-center text-sm text-gray-600">
              <Building className="w-4 h-4 mr-1" />
              {job.company}
            </div>
          </div>
        </div>
      </div>

      {/* Job Details */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        <Badge className={`${getTypeColor(job.type)} font-medium`}>
          {job.type}
        </Badge>
        
        <div className="flex items-center text-sm text-gray-600">
          <MapPin className="w-4 h-4 mr-1" />
          {job.location}
          {job.remote && (
            <Badge variant="outline" className="ml-2 text-xs bg-blue-50 text-blue-700 border-blue-200">
              Remote
            </Badge>
          )}
        </div>
        
        <div className="flex items-center text-sm text-gray-600">
          <DollarSign className="w-4 h-4 mr-1" />
          <span className="font-semibold text-green-600">{job.salary}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {job.description}
      </p>

      {/* Skills */}
      <div className="flex flex-wrap gap-1 mb-4">
        {job.skills.slice(0, 3).map((skill) => (
          <Badge key={skill} variant="secondary" className="text-xs">
            {skill}
          </Badge>
        ))}
        {job.skills.length > 4 && (
          <Badge variant="outline" className="text-xs">
            +{job.skills.length - 4} more
          </Badge>
        )}
      </div>

      {/* Footer */}
      <div className="flex items-center justify-between">
        <div className="flex items-center text-xs text-gray-500">
          <Briefcase className="w-3 h-3 mr-1" />
          <span>{job.requirements.length} requirements • Easy Apply</span>
        </div>
        
        <Button
          onClick={handleApply}
          size="sm"
          className="bg-blue-600 hover:bg-blue-700"
        >
          Apply Now
        </Button>
      </div>
    </motion.div>
  );
}