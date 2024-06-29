import { Gallery, Item } from 'react-photoswipe-gallery';
import 'photoswipe/style.css';
import images from '@/layout/Gallery/Images.ts';

const PhotoGallery = () => {
  const itemStyles: React.CSSProperties = {
    cursor: 'pointer',
    objectFit: 'cover', // Adjust the object fit as needed
    width: '100%', // Adjust width to fit the grid cell
    height: '100%', // Adjust height to fit the grid cell
  };

  return (
    <Gallery>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(120px, 1fr))', // Adjust minmax and breakpoints as needed
          gridAutoRows: '1fr', // Equal height rows
          gridGap: '0', // No gap between grid items
        }}>
        {images.map((image, index) => (
          <Item
            key={index}
            cropped
            original={image.source}
            thumbnail={image.source}
            width="1280" // Original image width (optional)
            height="1920" // Original image height (optional)
          >
            {({ ref, open }) => (
              <img
                style={itemStyles}
                alt={image.alt}
                src={image.source}
                ref={ref as React.MutableRefObject<HTMLImageElement>}
                onClick={open}
              />
            )}
          </Item>
        ))}
      </div>
    </Gallery>
  );
};

export default PhotoGallery;
