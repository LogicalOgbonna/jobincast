import './BlogPage.less';

import React from 'react'
import { Button } from 'antd'
import BaseMarkup from '../../components/Base/BaseMarkup';
import { veggies } from '../../assets/images/index';

const BlogPage = () => {
    return (
        <BaseMarkup className="background-image-left">
            <div className="desktop-layout">
                <div className= "blog-page">
                    <div className= "container">
                        <div className= "row justify-content-center">
                            <div className= "singleblog col-md-12">
                                <div className= "singleblog-top">
                                    <h1 className= "bigblogtitle">The 5 Essential Elements Your Resume Needs</h1>
                                    <span className= "font13 text-muted bigblogdate"><i className="dateicon fa fa-clock-o"></i> 14th March, 2020 </span>
                                    <img src= {veggies} />
                                </div>
                                <div className= "singleblog-bottom">
                                    <p className= "singleblog-details"><b>By Joe Konop, Next Avenue Contributor</b>
                                    <br />
                                   
                                    There is no single document in a person’s life that is more obsessed over than the resumé. Mortgage papers, a Last Will and Testament, even divorce papers don’t have the same intensive review, page-for-page, than the notorious resumé.

                                    Below are five elements that should be present in every resumé. If yours is missing any of these elements, you’ll want to get to work to fix it.
                                    <br />
                                    <br />
                                    <b>1. A loaded front end:</b>  When employers (or their software) review resumés, they typically are facing large stacks of them. Do you honestly think the reviewer will read every word of your — or anyone else’s —resumé?

                                    In reality, the average resumé gets about six seconds of review time before it’s either retained or pitched.

                                    (<b>MORE:</b> Keep Your Resume From Being a Career Obit)

                                    How much of your resumé can you read in six seconds? Are you making a compelling argument for yourself in that six seconds?

                                    Make sure the top of your resumé works hard and quickly makes the case that it should be retained for review consideration. The top third of the first page will be the key to whether your resumé makes that all-important first cut.

                                    The way to make a bold case quickly is by using…
                                    <br />
                                    <br />
                                    <b>2. Keywords:</b> These days, when we read — especially electronically — we often skim for keywords. So the beginning of your resumé should include a small, well-formed gathering of keywords that describe what you do.

                                    Why keywords? Two reasons:

                                    First, if a living, breathing human is reviewing the resumés, he or she is trying to match applicants with job descriptions. The right keywords will help you make this match.

                                    (<b>MORE:</b> How to Get Your Resume Read)

                                    Second, if the employer’s Applicant Tracking System (ATS) is scanning resumés for the best matches, it’s looking for those keywords, too. But with ATS screeners, if a keyword appears more often in a resumé or at the top of a page, it has more relevance.
                                    <br />
                                    <br />
                                    <b>3. Space:</b> Have you ever read a full page of a dictionary, top to bottom? Me neither. The thought of reading that text crammed onto one page makes me want to reach for my eye drops.

                                    Hiring managers reviewing resumés face the same torment. So have a heart; use some space in your resumé.

                                    Not a lot, but grouping like areas together is a good start. Put a line break in between jobs.

                                    Can you put a little space in after each bullet? It’s like a refreshing drink on a hot summer day!

                                    What’s that? You say you have so much to put into your resumé that you can’t afford to put any space in? Then it’s time, my friend, to put your resumé on a diet.

                                    It’s too long and will never be read because you’re making things too difficult.
                                    <br />
                                    <br />
                                    <b>4. Measurable success:</b>  I did really good at my last job. Really good! Successful, yup, that’s me! I did a lot. A lot!

                                    Sounds kinda like a seven-year-old, doesn’t it? Unfortunately, most resumés sound like this because they assign no measurement to what their owners have done.

                                    Let’s say your resumé says: Supervised a group of customer service representatives. 

                                    That’s not bad. It’s not memorable, but it’s not bad.

                                    But you’d make a much stronger case if you noted that you supervised 24 representatives in five states and were responsible for generating more than $27 million in sales per year, which accounted for 17% of the corporation’s annual sales.

                                    Better still, your resumé would really shine if you mentioned that those sales increased 15% annually through programs that you created and enacted.

                                    Giving measurements to what you’ve done adds size and scope to the statement and invariably makes your resumé stronger.
                                    <br />
                                    <br />
                                    <b>5. Flow:</b> If a hiring manager reading your resumé is confused, he’ll reject you in favor of someone with a clear, understandable version.

                                    A resumé tells a story, and that story is about you. Anyone should be able to read your resumé and be able to tell who you are, what you do, what you’ve done, where and when you did it and how well you did it.

                                    Testing your resumé for readability is easy.

                                    Give it to someone you don’t know that well and have him explain back to you what your story is. If he can’t, or the story is inconsistent with what you’re trying to communicate, your resumé needs help.

                                    If you find that your resumé needs serious help, work with a professional resumé writer who’ll spend time learning about you and what you want to accomplish. Then, this resumé writer can create a clean, professional, strong, compelling story showing why you’re an outstanding candidate.

                                    Once you have these five essential elements in your resumé, you’ll stand a better chance of getting an interview and — fingers crossed — your next job.
                                    <br />
                                    <br />
                                    <i>Joe Konop is the founder and principal of One Great Resumé, a resumé creation and career service provider. His web site is www.OneGreatResume.com. Follow him on Twitter @OneGreatResume and find him on Facebook.</i>
                                    </p>
                                    <div className= "blog-buttons">
                                        <Button className="ant-btn blog-button"><i className="fa fa-long-arrow-left blog-previous-button" aria-hidden="true"></i> Previous Post</Button>
                                        <Button className="ant-btn blog-button">Next Post <i className="fa fa-long-arrow-right blog-next-button" aria-hidden="true"></i></Button>
                                    </div>
                                </div>
                            </div>
                        </div> 

                    </div>
                </div>
            </div>
        </BaseMarkup>
    )
}

export default BlogPage
