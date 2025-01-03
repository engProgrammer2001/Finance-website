import React, { useState, useEffect } from "react";
import axios from "axios";
import { API_BASE_URL } from "../config/config";
import UpdateProfile from "../components/updateProfile/updateProfile";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../state/authSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profile, setProfile] = useState({
    fullName: "",
    number: "",
    email: "",
    about: "",
    avatar: "",
    role: "",
  });
  const [message, setMessage] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("authUser");
    dispatch(logout());
    navigate("/");
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    const fetchUserProfile = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}user/get-user-profile`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const userProfile = response.data;
        setProfile({
          fullName: userProfile.fullName,
          number: userProfile.number,
          email: userProfile.email,
          about: userProfile.about || "",
          avatar:
            userProfile.avatar ||
            "https://cdn-icons-png.flaticon.com/512/149/149071.png",
          role: userProfile.role,
        });
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();
  }, []);

  const handleProfileChange = (e) => {
    const { id, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [id]: value,
    }));
  };

  const handleProfileSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `${API_BASE_URL}user/update-profile`,
        profile
      );
      setMessage("Profile updated successfully!");
    } catch (error) {
      console.error("Error updating profile:", error);
      setMessage("Failed to update profile");
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:space-x-4">
      {/* Profile Details Form */}
      <div className="w-full md:w-1/2 bg-card p-4 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4 text-center p-4 bg-yellow-400 text-slate-800 rounded-lg">
          Profile Details
        </h2>
        <div className="flex items-center mb-4">
          <img
            src={profile.avatar}
            alt="Avatar"
            className="w-16 h-16 rounded-full mr-4"
          />
        </div>
        <form onSubmit={handleProfileSubmit}>
          <div className="mb-4">
            <label
              className="block text-sm font-medium mb-1"
              htmlFor="fullName"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={profile.fullName}
              onChange={handleProfileChange}
              className="border border-border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="number">
              Phone
            </label>
            <input
              type="text"
              id="number"
              value={profile.number}
              onChange={handleProfileChange}
              className="border border-border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={profile.email}
              onChange={handleProfileChange}
              className="border border-border rounded-lg p-2 w-full"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="about">
              About me
            </label>
            <textarea
              id="about"
              value={profile.about}
              onChange={handleProfileChange}
              className="border border-border rounded-lg p-2 w-full"
              rows="4"
            />
          </div>
        </form>
        <button
          onClick={handleLogout}
          type="button"
          className="w-full bg-green-400 font-bold text-white hover:bg-green-500 p-2 rounded-lg"
        >
          Logout
        </button>
        {message && (
          <div className="mt-4 p-2 text-center bg-gray-100 text-gray-800 rounded-lg">
            {message}
          </div>
        )}
      </div>

      <div className="w-full md:w-1/2 bg-card rounded-lg shadow">
        <UpdateProfile />
      </div>
    </div>
  );
};

export default Profile;
