import { creators } from '@/data/creators';
import { currentUserProfile } from '@/data/currentUser';
import ProfileClient from './ProfileClient';
import type { Creator } from '@/data/creators';

// Generate static params for all known creators
export async function generateStaticParams() {
  // Include all creators from the data
  const creatorIds = creators.map((creator) => ({
    id: creator.id,
  }));

  // Add the current user profile
  creatorIds.push({ id: 'current-user' });

  return creatorIds;
}

// Server component that fetches data and passes to client
export default function ProfilePage({ params }: { params: { id: string } }) {
  // Get the creator data on the server side
  let creator: Creator | null = null;
  let isOwnProfile = false;

  const profileId = params.id;

  // Check if it's the current user's profile
  if (profileId === 'current-user') {
    creator = currentUserProfile;
    isOwnProfile = true;
  } else {
    // Find creator from the creators data
    creator = creators.find(c => c.id === profileId) || null;
    isOwnProfile = false;
  }

  // Pass the data to the client component
  return (
    <ProfileClient 
      creator={creator} 
      isOwnProfile={isOwnProfile}
      profileId={profileId}
    />
  );
}