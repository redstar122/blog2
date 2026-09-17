import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
return (
<Layout home>
<Head>
<title>{siteTitle}</title>
</Head>
<section className={utilStyles.headingMd}>
<p>Hi there! I am Rhedjhie S. Calma and choosing Artificial Intelligence as my IT specialization was a natural decision driven by my passion for modern technology. 
    Working as a Virtual Assistant in the AI industry made this technical transition much easier because I already had hands-on experience with the tools and workflows. 
    I chose this path to help solve the real-world challenge where businesses struggle to integrate complex AI systems into daily operations. 
    Combining my practical industry background with technical expertise allows me to bridge that gap effectively. 
    Ultimately, this field empowers me to turn my genuine passion into building practical, user-friendly automated solutions. </p>
<p>
(This is a sample website - you’ll be building a site like this on{' '}
<a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
</p>
</section>
</Layout>
);
}  