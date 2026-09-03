import { ImageResponse } from 'next/og';

export const size = {
  width: 512,
  height: 512,
};

export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 300,
          background: '#fde047', // marker-yellow
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#1c1917', // ink
          borderRadius: '100px',
          fontWeight: 700,
        }}
      >
        K
      </div>
    ),
    {
      ...size,
    }
  );
}
