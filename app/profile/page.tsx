"use client";

import { useEffect, useState } from 'react';
import axios from 'axios';
import Link from "next/link";

const Profile = () => {
  const [profileData, setProfileData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('https://dev-apis.explorebtk.com/api/v1/auth/profile', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setProfileData(response.data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      }
    };
    fetchProfileData();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold mb-4">Profile Page</h1>
      <div>
        <p className="mb-2">
          <span className="font-bold">Name:</span> {profileData.name}
        </p>
        <p className="mb-2">
          <span className="font-bold">Email:</span> {profileData.email}
        </p>
        <p className="mb-2">
          <span className="font-bold">Phone:</span> {profileData.phone}
        </p>
        {/* Add other profile information here */}
      </div>
      <div className="text-center">
        Go to LogIn Page
        <Link href="/login" className="ml-2 text-blue-500">
          LogIn
        </Link>
      </div>
      <div className="text-center">
        Not a member?
        <Link href="/register" className="ml-2 text-blue-500">
          SignUp now
        </Link>
      </div>
    </div>
  );
};

export default Profile;
