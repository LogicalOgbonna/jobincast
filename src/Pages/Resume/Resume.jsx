import './Resume.scss';

import { CloudDownloadOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Avatar, Button, Modal, Skeleton, Steps } from 'antd';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';

import BaseMarkup from '../../components/Base/BaseMarkup';
import { getSingleResumeAC } from '../../store/resume/action';
import { downloadResumeAC } from '../../store/employer/action';



const { Step } = Steps;
const Resume = () => {
    const dispatch = useDispatch()
    const { id } = useParams()

    const [applyModal, setApplyModal] = useState(false)
    const [activeResume, setActiveResume] = useState(null)
    useEffect(() => {
        dispatch(getSingleResumeAC(id))
        // dispatch(getContactByIdAC(id))
    }, [])
    const onApplyModalOpen = () => {
        setApplyModal(!applyModal)
    }
    const downloadResume = (id) => {
        Modal.confirm({
            title: 'Do you want to download this resume?',
            icon: <ExclamationCircleOutlined />,
            content: 'You will be charged 2points.',
            onOk() {
                dispatch(downloadResumeAC(id))
            },
            onCancel() { },
        });
    }
    const { resume, resumeLoading, profile } = useSelector(({ resumeSlice: { resume, resumeLoading }, profileSlice: { profile } }) => ({ resume, resumeLoading, profile }))
    return (
        <BaseMarkup className="bg-grey background-image-left">
            <div className="desktop-layout job-page">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-10 text-center">
                            {resumeLoading ?
                                <Skeleton.Avatar title size={120} loading={resumeLoading} active />
                                :
                                <>
                                    <Avatar src={resume?.imageUrl} size={100} />
                                    <h2 className="job-page-company-name">{resume?.fullName}</h2>
                                    <p className="slogan">{resume?.title} <br />{resume?.shortBio}</p>
                                </>
                            }
                        </div>
                        <div className="col-md-10 job-details">
                            {/* <Skeleton paragraph={{ rows: 10 }} loading={resumeLoading} active>
                                <h4 className="lh50">Contact Information</h4>
                                <p>Address : Not Unit Available</p>
                                <p>Location :  Not Unit Available</p>
                            </Skeleton> */}
                            <Skeleton
                                paragraph={{ rows: 10 }} loading={resumeLoading} active
                            >
                                <h4 className="lh50">General Information</h4>
                                <p>Language(s) :  {resume?.language}</p>
                                <p>Highest Degree Level :  {resume?.degree === "HIGHER_D" ? "HIGHER DIPLOMA" : resume?.degree}</p>
                                <p>Total Years of Experience : {resume?.yearsOfExperience} Years</p>
                                <br></br>

                                <p className="job-details-content">
                                    {resume?.fullBio}
                                </p>
                                <br></br>
                                <div className="py-2">
                                    <Steps direction="vertical" current={5}>
                                        <Step title="Education" description={
                                            resume?.educations?.map(education => <div key={education.id}>
                                                <h6>{education.institution}</h6>
                                                <div className="d-flex">
                                                    <p>{education.endYear}</p>
                                                    <p className="px-5 color-purple text-capitalize">{education.degree}</p>
                                                </div>
                                            </div>)
                                        } />
                                        <Step title="Work Experience" description={
                                            resume?.experiences?.map(experience => <div key={experience.id}>
                                                <h6 >{experience.company}</h6>
                                                <div className="d-flex">
                                                    <p>{experience.endDate}</p>
                                                    <p className="px-5 color-purple text-capitalize">{experience.jobTitle}</p>
                                                </div>
                                            </div>)
                                        } />
                                        <Step title="Skills" description={
                                            resume?.skills?.map(skill =>
                                                <div key={skill.id} className="">
                                                    <h6>{skill.name}</h6>
                                                    <p className="color-purple">{skill.experienceLevel}</p>
                                                </div>)
                                        } />
                                        <Step title="Awards" description={
                                            resume?.awards?.map(skill =>
                                                <div key={skill.id} className="">
                                                    <h6>{skill.title}</h6>
                                                    <div className="d-flex">
                                                        <p>{skill.yearAwarded}</p>
                                                        <p className="px-5 color-purple">{skill.institution}</p>
                                                    </div>
                                                </div>)
                                        } />
                                    </Steps>
                                </div>
                                <br></br>
                                <br></br>
                                <br></br>
                                <div className="row justify-content-center">
                                    <div className="col-12 text-center">
                                        <Button onClick={onApplyModalOpen} className="job-details-button">Download full Resume</Button>
                                    </div>
                                </div>
                            </Skeleton>
                        </div>
                    </div>
                </div>

                <Modal onCancel={onApplyModalOpen} title="Download Resume" visible={applyModal} footer={null}>
                    <div className="pb-2 download-modal">
                        {resume?.attachments?.filter(value => value.attachmentType === "DOCUMENT")?.map(value =>
                            <div key={value.id} className={`single-resume`}>
                                <div>{value.attachmentName}</div>
                                <Button className="download-button" type="primary" onClick={() => downloadResume(value.id)}><CloudDownloadOutlined /></Button>
                            </div>
                        )}
                    </div>
                </Modal>
            </div>
        </BaseMarkup >
    )
}

export default Resume
