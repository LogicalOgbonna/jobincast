import { Button, Steps } from 'antd';
import Checkbox from 'antd/lib/checkbox/Checkbox';
import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';

const { Step } = Steps;

const PreviewProfile = ({ accountType, onFinish, loading, action }) => {
    const { push } = useHistory()
    const profile = useSelector(({ profileSlice: { profile } }) => profile)
    const back = () => push(`/profile?action=setup&step=3&accountType=${accountType}`);
    return (
        <div className="row">
            <div className="col-md-12">
                <h5>Contact Information</h5>
                <div className="d-flex py-3 flex-wrap">
                    {profile?.contact?.emailAddress && <p className="px-2">Email:<a className="color-purple" href={profile?.contact?.emailAddress} target="_blank" rel="noreferrer">{profile?.contact?.emailAddress}</a></p>}
                    {profile?.contact?.phone && <p className="px-2">Phone: {profile?.contact?.phone}</p>}
                    {profile?.contact?.linkedInUrl && <p className="px-2">LinkedIn: <a className="color-purple" href={profile?.contact?.linkedInUrl} target="_blank" rel="noreferrer">{profile?.contact?.linkedInUrl}</a></p>}
                    {profile?.contact?.facebookUrl && <p className="px-2">Facebook: <a className="color-purple" href={profile?.contact?.facebookUrl} target="_blank" rel="noreferrer">{profile?.contact?.facebookUrl}</a></p>}
                    {profile?.contact?.twitterUrl && <p className="px-2">Twitter: <a className="color-purple" href={profile?.contact?.twitterUrl} target="_blank" rel="noreferrer">{profile?.contact?.twitterUrl}</a></p>}
                    {profile?.contact?.websiteUrl && <p className="px-2">Portfolio: <a className="color-purple" href={profile?.contact?.websiteUrl} target="_blank" rel="noreferrer">{profile?.contact?.websiteUrl}</a></p>}
                    {profile?.contact?.otherUrl && <p className="px-2">Other: <a className="color-purple" href={profile?.contact?.otherUrl} target="_blank" rel="noreferrer">{profile?.contact?.otherUrl}</a></p>}
                </div>

                <h5>General Information</h5>
                <p>Address: {profile?.contact?.address}</p>
                <p>Country: {profile?.contact?.country} </p>
                <p>Languages: {profile?.language} </p>
                <p>Highest Degree Level: {profile?.degree} </p>
                <p>Total Years of Experience: {profile?.yearsOfExperience} Year(s)</p>


                <br />
                <br />
                <p>{profile?.fullBio}</p>
                <br />
                <br />
                <Steps className="step-custom-style" direction="vertical" current={5}>
                    {profile?.educations && <Step
                        icon={<i className="fa fa-book" />}
                        title="Education"
                        description={
                            profile.educations.length ?
                                profile.educations.map(education => <div key={education.id}>
                                    <h6>{education.institution}</h6>
                                    <div className="d-flex">
                                        <p>{education.endYear}</p>
                                        <p className="px-5 color-purple text-capitalize">{education.degree}</p>
                                    </div>
                                </div>)
                                : <p>No Education Supplied</p>
                        }
                    />}
                    {profile?.experiences && <Step
                        icon={<i className="fa fa-briefcase" />}
                        title="Work Experience"
                        description={
                            profile.experiences.length ?
                                profile.experiences.map(experience => <div key={experience.id}>
                                    <h6 >{experience.company}</h6>
                                    <div className="d-flex">
                                        <p>{experience.endDate}</p>
                                        <p className="px-5 color-purple text-capitalize">{experience.jobTitle}</p>
                                    </div>
                                </div>)
                                : <p>No Education Supplied</p>

                        }
                    />}
                    {profile?.skills && <Step
                        icon={<i className="fa fa-sign-language" aria-hidden="true" />}
                        title="Skills"
                        description={
                            profile.skills.length ?
                                profile.skills.map(skill =>
                                    <div key={skill.id} className="">
                                        <h6>{skill.name}</h6>
                                        <p className="color-purple">{skill.experienceLevel}</p>
                                    </div>)
                                : <p>No Skills Supplied</p>

                        }
                    />}
                    {profile?.awards && <Step
                        icon={<i className="fa fa-trophy" />}

                        title="Awards"
                        description={
                            profile.awards.length ?
                                profile.awards.map(skill =>
                                    <div key={skill.id} className="">
                                        <h6>{skill.title}</h6>
                                        <div className="d-flex">
                                            <p>{skill.yearAwarded}</p>
                                            <p className="px-5 color-purple">{skill.institution}</p>
                                        </div>
                                    </div>)
                                : <p>No Skills Supplied</p>
                        }
                    />}

                </Steps>
            </div>
            {action === "setup" && <>
                <div className="col-12 text-center pt-3 pb-5">
                    <Checkbox /> The employer can find your resume and contact you via email or BigTalent regarding your resume. Preview all information thoroughly before submitting your resume
            </div>
                <div className="col-12 text-center d-flex justify-content-center">
                    <Button htmlType="button" onClick={back} className="button-blue mx-1">Back</Button>
                    <Button loading={loading} onClick={onFinish} htmlType="submit" className="button-blue mx-1">Submit</Button>
                </div>
            </>}
            {
                action === "view" && <div className="col-12 text-center d-flex justify-content-center">
                    <Button htmlType="button" onClick={onFinish} className="button-blue mx-1"> <i className="fa fa-pencil px-1" /> Edit</Button>
                </div>
            }
        </div>
    )
}

export default PreviewProfile
