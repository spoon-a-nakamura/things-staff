import { Helmet } from 'react-helmet';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import Layout from '../components/Layout';

function BlogDetails(props) {
  const [content, setContent] = useState('');
  const blogFile = props.match.params.title;

  useEffect(() => {
    axios.get(require(`../blog/${blogFile}.md`)).then((result) => {
      setContent(result.data);
    });
  }, [content, blogFile]);

  return (
    <Layout>
      <Helmet>
        <title>Blog Details - Chester React Personal Portfolio Template</title>
        <meta
          name='description'
          content='Chester React Personal Portfolio Template Blog Details Page'
        />
      </Helmet>
      <div className='mi-blog-details mi-section mi-padding-bottom'>
        <div className='container'>
          <ReactMarkdown source={content} escapeHtml={false}></ReactMarkdown>
        </div>
      </div>
    </Layout>
  );
}

export default BlogDetails;
