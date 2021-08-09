/* eslint-disable no-unused-vars */
import { Helmet } from 'react-helmet';
import axios from 'axios';
import FsLightbox from 'fslightbox-react';
import React, { useEffect, useState } from 'react';
import * as Icon from 'react-feather';
import ProgressiveImage from 'react-progressive-image';
import Slider from 'react-slick';
import Layout from '../components/Layout';
import Sectiontitle from '../components/Sectiontitle';
import Service from '../components/Service';
import Testimonial from '../components/Testimonial';

function About() {
  const [information, setInformation] = useState('');
  const [services, setServices] = useState([]);
  const [reviews, setReviews] = useState([]);

  const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  useEffect(() => {
    axios.get('/api/information').then((response) => {
      setInformation(response.data);
    });
    axios.get('/api/services').then((response) => {
      setServices(response.data);
    });
    axios.get('/api/reviews').then((response) => {
      setReviews(response.data);
    });
  }, []);

  return (
    <Layout>
      <Helmet>
        <title>About | THINGS 2022 for staff</title>
      </Helmet>
      <div className='mi-about-area mi-section mi-padding-top'>
        <div className='container'>
          <Sectiontitle title='ABOUT' />
          <div className='row'>
            <div className='col-lg-6'>
              <div className='mi-about-image'>
                <ProgressiveImage
                  src={information.aboutImage}
                  placeholder='/images/banners/placeholder.jpg'
                >
                  {(src) => <img src={src} alt='THINGS 2022' />}
                </ProgressiveImage>
              </div>
            </div>
            <div className='col-lg-6'>
              <div className='mi-about-content'>
                <h3>このサイトの役割</h3>
                <p>{information.aboutContent}</p>
                <ul>
                  <li>
                    <b>会期予定</b> 2022年GW頃
                  </li>
                  <li>
                    <b>クラフト</b> 関口さん
                  </li>
                  <li>
                    <b>フード</b> 田屋さん
                  </li>
                  <li>
                    <b>ワークショップ</b> 田屋さん or 新規スタッフ
                  </li>
                  <li>
                    <b>音楽</b> 鶫さん
                  </li>
                  <li>
                    <b>インスタ</b> 清水さん
                  </li>
                  <li>
                    <b>広報</b> 田屋さん
                  </li>
                  <li>
                    <b>WEB</b> 中村さん
                  </li>
                  <li>
                    <b>イラスト</b> 小島さん
                  </li>
                  <li>
                    <b>ワークショップ監修</b> 近岡さん
                  </li>
                  <li>
                    <b>旅するクラウドcafe</b> ヒョンアさん
                  </li>
                </ul>
                <a
                  href={information.cvfile}
                  rel='noopener noreferrer'
                  target='_blank'
                  className='mi-button'
                >
                  Google Drive
                </a>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-lg-8'>
              <div className='mi-about-content'>
                <h3>2022年 課題・目標</h3>
                <p>
                  イベントの来訪者を増やし、楽しんでもらう。⇒各参加者の宣伝や販売につながる
                  そのためには
                  1番は、魅力的な参加者を増やすこと（特にクラフト！）
                  さらには、面白いコンテンツと宣伝。
                </p>
                <h4>参加者の確保</h4>
                <p>
                  同じ出店者のみではなく、新しい魅力的な作家を何人か加える必要がある。前年の参加者で翌年参加しない人も出てくるので、早めに参加者の紹介を募る必要がある。また、面白い参加者が増えることがイベントの魅力になり、自身の宣伝につながるという感覚も、共有できると良い。
                </p>
                <h4>収入</h4>
                <p>参加費を2000円から3000円へ変更。</p>
                <p>クラフト部門は参加者min.35名、max50名を目指したい。</p>
                <h4>広告</h4>
                <p>8月～3月のインスタの活用。</p>
                <p>
                  クラフト以外にも、Foodの制作動画や、音楽部なども活用できそう。もちろんワークショップも。
                </p>
                <h4>YouTubeの活用</h4>
                <p>
                  インスタに載せた動画を希望者はYouTubeカタチプロジェクトのページに載せる？
                </p>
                <a
                  href='https://docs.google.com/document/d/1QyywtSx74N9uQ24XaHVIpx0lMhRuOkoD/'
                  rel='noopener noreferrer'
                  target='_blank'
                  className='mi-button'
                >
                  初回MTG議事録
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='mi-service-area mi-section mi-padding-top'>
        <div className='container'>
          <Sectiontitle title='Services' />
          <div className='mi-service-wrapper'>
            <div className='row mt-30-reverse'>
              {services.map((service) => (
                <div
                  className='col-lg-4 col-md-6 col-12 mt-30'
                  key={service.title}
                >
                  <Service content={service} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='mi-review-area mi-section mi-padding-top mi-padding-bottom'>
        <div className='container'>
          <Sectiontitle title='Reviews' />
          <div className='row justify-content-center'>
            <div className='col-12'>
              <Slider className='mi-testimonial-slider' {...sliderSettings}>
                {reviews.map((review) => (
                  <Testimonial key={review.id} content={review} />
                ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
     */}
    </Layout>
  );
}

export default About;
