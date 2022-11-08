import React, { FC } from 'react';
import './ImageGallery.scss';

interface Props {
  images: string[];
}

const ImageGallery:FC<Props> = ({images}) => {
  const [mainImg, setMainImg] = React.useState<number>(0);

  return (
    <div className='ImageGallery'>
      <figure className='ImageGallery--main'>
        <img
          src={images[mainImg]}
          alt={`Photo ${mainImg}`}
        />
      </figure>
      <ul className='ImageGallery--options'>
        { images.map((photo, index) => 
          <li 
            className='ImageGallery--options--option'
            key={`photo-option-${index}`}
            onClick={() => setMainImg(index)}
          >
            <img src={photo} alt={`Photo of ${name}`} />
          </li>
        )}
      </ul>
    </div>
  )
}

export { ImageGallery };
