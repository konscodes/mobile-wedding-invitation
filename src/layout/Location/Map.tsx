const Map = () => {

  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d611.0345708536422!2d127.00005239647244!3d37.65652025198314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357cbc2b9c665ff9%3A0x8fa2851dee049210!2sSunwoongak!5e0!3m2!1sen!2sjp!4v1716694041572!5m2!1sen!2sjp`;

  return (
    <div style={{ width: '100%', height: '300px' }}>
      <iframe
        src={googleMapsUrl}
        width="100%"
        height="300"
        style={{ border: '0' }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  );
};

export default Map;
