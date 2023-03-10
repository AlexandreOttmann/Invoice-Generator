import React, { CSSProperties } from 'react';

const ContentTemplate: React.FC = () => {
 const styles = {
  coverBg: {
   position: 'absolute',
   left: 0,
   top: 0,
   zIndex: 0,
   width: '596px',
   height: '100%',
  } as CSSProperties,
  container: {
   display: 'flex',
   flexDirection: 'column',
   justifyContent: 'center',
   position: 'relative',
   overflow: 'hidden',
   width: '446px',
   height: '631px',
  } as CSSProperties,
  contentContainer: {
   width: '446px',
   position: 'relative',
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
  } as CSSProperties,
  contentCard: {
   zIndex: 1,
   backgroundColor: 'black',
  } as CSSProperties,
  title: {
   fontFamily: 'Anton, Anton-Regular',
   fontSize: '1rem',
   color: 'white',
   textAlign: 'center',
  } as CSSProperties,
  imgContainer: {
   width: '300px',
  } as CSSProperties,
  img: {
   display: 'block',
   width: '100%',
   height: '100%',
  } as CSSProperties,
 };

 return (
  <div style={styles.container}>
   {/* <img
    alt="cover"
    style={styles.coverBg}
    src={require('./imgs/cover_bg.jpg')}
   /> */}
   <div style={styles.contentContainer}>
    <div style={styles.contentCard}>
     <p style={styles.title}>Drivers putting $50 in their car today</p>
     <div style={styles.imgContainer}>
      {/* <img style={styles.img} alt="meme" src={require('./imgs/meme_img.jpg')} /> */}
     </div>
    </div>
   </div>
  </div>
 );
};

export default ContentTemplate;
