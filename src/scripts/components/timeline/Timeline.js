import React from 'react';
import TimelineEvent from "./TimelineEvent";
import vonalkod from "../../../content/partner-logos/vonalkod.png";
import zenheads from "../../../content/partner-logos/zenheads.png";
import oe from "../../../content/partner-logos/oe.png";
import soter from "../../../content/partner-logos/soter.png";
import merkit from "../../../content/partner-logos/merkit.png";
import cloudcode from "../../../content/partner-logos/cloudcode.png";
import goldsprint from "../../../content/partner-logos/goldsprint.png";

export default function ({}) {
    return (
        <div className="time-line">
            <span className="center-line"></span>
            <div className="row">
                <TimelineEvent company="Obuda University" title="BA in Computer Science" years="2014 Sep - 2018 Jun"
                               description={
                                   <p>Software engineering, software technology, information technology, science</p>
                               } logo={oe}/>
                <TimelineEvent company="Vonalkód Rendszerház Kft." title="Backend Developer" years="2015 Okt - 2016 Mar"
                               description={
                                   <p>ASP.NET backend, MS-SQL database, bootstrap frontend of industrial systems</p>
                               } logo={vonalkod} right={true}/>
            </div>
            <div className="row">
                <TimelineEvent company="Zenheads Kft." title="Mobile Developer" years="2016 Mar"
                               description={
                                   <p>Development of connected cross platform mobile applications with Xamarin and
                                       MvvmCross</p>
                               } logo={zenheads}/>
                <TimelineEvent company="Cloudcode Hungary" title="Fullstack Developer" years="2016 Sep"
                               description={
                                   <p>Business development with Django REST services and React-Redux frontend</p>
                               } logo={cloudcode} right={true}/>
            </div>
            <div className="row">
                <TimelineEvent company="Goldsprint Gear" title="IoT Developer" years="2016 Jun"
                               description={
                                   <p>Raspberry py 3, PCL design, Django Rest service for Goldsprint race
                                       measurement</p>
                               } logo={goldsprint}/>
                <TimelineEvent company="Merkit Consulting Kft." title="Test Engineer" years="2017 Mar"
                               description={
                                   <p>Selenium based test automation of mobile apps and websites</p>
                               } logo={merkit} right={true}/>
            </div>
            <div className="row">
                <TimelineEvent company="Soter-Line Oktatási Központ" title="Software Lecturer"
                               years="2017 May - 2017 Okt"
                               description={
                                   <p>Teach OOP, C# for a small group in Technical And Further Education</p>
                               } logo={soter}/>
            </div>
        </div>
    );
}