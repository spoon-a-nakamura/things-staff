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

function Craft() {
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
        <title>Craft | THINGS 2022 for staff</title>
      </Helmet>
      <div className='mi-about-area mi-section mi-padding-top'>
        <div className='container'>
          <Sectiontitle title='Craft' />
          <div className='row'>
            <div className='col-lg-12'>
              <h3>Craft出展者のTODOリストサンプル</h3>
              <h4>埋め込み型</h4>
              <p>
                以下は、TODOリストリストをWEBサイトに埋め込んだ場合のサンプルです。ここに入力してもらうことで、Spreadsheetに反映されます。
              </p>
              <iframe
                src='https://docs.google.com/forms/d/e/1FAIpQLSc8_kUeYlLV3LryT0vidx6d2oSnGxL5VYjTtAzsslGdfnCRtg/viewform?embedded=true'
                width='640'
                height='1230'
                frameborder='0'
                marginheight='0'
                marginwidth='0'
                className='iframe'
                title='craft todo'
              >
                読み込んでいます…
              </iframe>
              <h4>URL送付型</h4>
              <p>
                以下は埋め込まずに、URLを直接送った場合のサンプルです。こちらもSpreadsheetに反映されるので、行っていることは一緒になり、案内をURLを直接送るか、このようなウェブサイトを開いてもらうかどうかの違いになりそうです。
              </p>
              <a
                href='https://forms.gle/nBFJKCWug4ast36R9'
                rel='noopener noreferrer'
                target='_blank'
                className='mi-button'
              >
                直接送る場合のサンプル
              </a>
              <br />
              <br />
              <br />
              <h4>集約されるSpreadsheet例</h4>
              <p>
                上記に入力してもらうことで、以下のSpreadsheetに自動で回答状況が反映され、提出状況を一覧管理をすることができそうです。
              </p>
              <a
                href='https://forms.gle/nBFJKCWug4ast36R9'
                rel='noopener noreferrer'
                target='_blank'
                className='mi-button'
              >
                Spreadsheetのサンプル
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Craft;
