import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createMentor } from '../services/operations/MENTOR_API';
import Footer from '../components/Footer';

const MentorApplicationForm = () => {
  const [step, setStep] = useState(1);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { token } = useSelector(state => state.auth);
  const [formData, setFormData] = useState({
    gender: '',
    dateOfBirth: '',
    contactNumber: '',
    skills: [],
    category: '',
    location: '',
    languages: [],
    bio: '',
    linkedInURL: '',
    personalWebsite: '',
    career: [{ startDate: '', endDate: '', organisation: '', role: '' }],
    education: [{ startDate: '', endDate: '', institute: '', course: '' }],
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleTagsChange = (e, field) => {
    const value = e.target.value.split(',').map((tag) => tag.trim());
    setFormData((prevData) => ({ ...prevData, [field]: value }));
  };

  const handleCareerChange = (index, e) => {
    const updatedCareer = [...formData.career];
    updatedCareer[index][e.target.name] = e.target.value;
    setFormData((prevData) => ({ ...prevData, career: updatedCareer }));
  };

  const handleEducationChange = (index, e) => {
    const updatedEducation = [...formData.education];
    updatedEducation[index][e.target.name] = e.target.value;
    setFormData((prevData) => ({ ...prevData, education: updatedEducation }));
  };

  const addCareer = () => {
    setFormData((prevData) => ({
      ...prevData,
      career: [...prevData.career, { startDate: '', endDate: '', organisation: '', role: '' }],
    }));
  };

  const addEducation = () => {
    setFormData((prevData) => ({
      ...prevData,
      education: [...prevData.education, { startDate: '', endDate: '', institute: '', course: '' }],
    }));
  };

  const validateStep1 = () => {
    const errors = {};
    if (!formData.gender) errors.gender = 'Gender is required';
    if (!formData.dateOfBirth) errors.dateOfBirth = 'Date of Birth is required';
    if (!formData.contactNumber) errors.contactNumber = 'Contact Number is required';
    if (!formData.skills.length) errors.skills = 'At least one skill is required';
    if (!formData.category) errors.category = 'Category is required';
    if (!formData.location) errors.location = 'Location is required';
    if (!formData.languages.length) errors.languages = 'At least one language is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep2 = () => {
    const errors = {};
    if (!formData.bio) errors.bio = 'Bio is required';
    if (!formData.linkedInURL) errors.linkedInURL = 'LinkedIn URL is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const validateStep3 = () => {
    const errors = {};
    if (formData.career.some((c) => !c.startDate || !c.endDate || !c.organisation || !c.role)) {
      errors.career = 'All fields in Career section are required';
    }
    if (formData.education.some((e) => !e.startDate || !e.endDate || !e.institute || !e.course)) {
      errors.education = 'All fields in Education section are required';
    }
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep3()) {
      console.log('Form Submitted', formData);
      dispatch(createMentor(formData, token));
      navigate('/mentor-applied')
    }
  };

  const nextStep = () => {
    let valid = true;
    if (step === 1) valid = validateStep1();
    if (step === 2) valid = validateStep2();

    if (valid) setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <div className="flex flex-col items-center min-h-[80vh] bg-gray-50 py-8">
        <h1 className="text-4xl font-bold mb-8">Apply as a Mentor</h1>
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-6">
          {/* Progress Bar */}
          <div className="flex justify-between items-center mb-8">
            <div className={step >= 1 ? 'text-green-600 font-bold text-2xl' : 'text-gray-400 font-bold text-2xl'}>
              About You
            </div>
            <div className={step >= 2 ? 'text-green-600 font-bold text-2xl' : 'text-gray-400 font-bold text-2xl'}>
              Profile
            </div>
            <div className={step === 3 ? 'text-green-600 font-bold text-2xl' : 'text-gray-400 font-bold text-2xl'}>
              Experience
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Step 1 - About You */}
            {step === 1 && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label>Gender</label>
                    <select
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    >
                      <option value="">Select gender...</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select>
                    {errors.gender && <p className="text-red-500">{errors.gender}</p>}
                  </div>
                  <div>
                    <label>Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    {errors.dateOfBirth && <p className="text-red-500">{errors.dateOfBirth}</p>}
                  </div>
                  <div>
                    <label>Contact Number</label>
                    <input
                      type="text"
                      name="contactNumber"
                      value={formData.contactNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    {errors.contactNumber && <p className="text-red-500">{errors.contactNumber}</p>}
                  </div>
                  <div>
                    <label>Skills</label>
                    <input
                      type="text"
                      name="skills"
                      value={formData.skills.join(', ')}
                      onChange={(e) => handleTagsChange(e, 'skills')}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="Enter skills, separated by commas"
                    />
                    {errors.skills && <p className="text-red-500">{errors.skills}</p>}
                  </div>
                  <div>
                    <label>Category</label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    >
                      <option value="">Select category...</option>
                      <option value="Mental Health Specialist">Mental Health Specialist</option>
                      <option value="Engineering and Data">Engineering and Data</option>
                      <option value="UX and Design">UX and Design</option>
                      <option value="Business and Management">Business and Management</option>
                      <option value="Product and Marketing">Product and Marketing</option>
                    </select>
                    {errors.category && <p className="text-red-500">{errors.category}</p>}
                  </div>
                  <div>
                    <label>Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    {errors.location && <p className="text-red-500">{errors.location}</p>}
                  </div>
                  <div>
                    <label>Languages</label>
                    <input
                      type="text"
                      name="languages"
                      value={formData.languages.join(', ')}
                      onChange={(e) => handleTagsChange(e, 'languages')}
                      className="w-full px-4 py-2 border rounded-lg"
                      placeholder="Enter languages, separated by commas"
                    />
                    {errors.languages && <p className="text-red-500">{errors.languages}</p>}
                  </div>
                </div>
              </div>
            )}

            {/* Step 2 - Profile */}
            {step === 2 && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label>Bio</label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                      rows={4}
                    />
                    {errors.bio && <p className="text-red-500">{errors.bio}</p>}
                  </div>
                  <div>
                    <label>LinkedIn URL</label>
                    <input
                      type="text"
                      name="linkedInURL"
                      value={formData.linkedInURL}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    {errors.linkedInURL && <p className="text-red-500">{errors.linkedInURL}</p>}
                  </div>
                  <div>
                    <label>Personal Website</label>
                    <input
                      type="text"
                      name="personalWebsite"
                      value={formData.personalWebsite}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3 - Experience */}
            {step === 3 && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Career</h2>
                {formData.career.map((c, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="organisation"
                      placeholder="Organisation"
                      value={c.organisation}
                      onChange={(e) => handleCareerChange(index, e)}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      name="role"
                      placeholder="Role"
                      value={c.role}
                      onChange={(e) => handleCareerChange(index, e)}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="date"
                      name="startDate"
                      id='startDate'
                      placeholder="Start Date"
                      value={c.startDate}
                      onChange={(e) => handleCareerChange(index, e)}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="date"
                      name="endDate"
                      placeholder="End Date"
                      value={c.endDate}
                      onChange={(e) => handleCareerChange(index, e)}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addCareer}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Add Career
                </button>

                <h2 className="text-2xl font-bold mb-4 mt-8">Education</h2>
                {formData.education.map((e, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <input
                      type="text"
                      name="institute"
                      placeholder="Institute"
                      value={e.institute}
                      onChange={(e) => handleEducationChange(index, e)}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="text"
                      name="course"
                      placeholder="Course"
                      value={e.course}
                      onChange={(e) => handleEducationChange(index, e)}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="date"
                      name="startDate"
                      placeholder="Start Date"
                      value={e.startDate}
                      onChange={(e) => handleEducationChange(index, e)}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                    <input
                      type="date"
                      name="endDate"
                      placeholder="End Date"
                      value={e.endDate}
                      onChange={(e) => handleEducationChange(index, e)}
                      className="w-full px-4 py-2 border rounded-lg"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  onClick={addEducation}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Add Education
                </button>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 && (
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                >
                  Back
                </button>
              )}
              {step < 3 && (
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg"
                >
                  Next
                </button>
              )}
              {step === 3 && (
                <button
                  type="submit"
                  className="bg-green-500 text-white px-4 py-2 rounded-lg"
                  disabled={Object.keys(errors).length > 0}
                >
                  Submit
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      <Footer></Footer>
    </>

  );
};

export default MentorApplicationForm;
