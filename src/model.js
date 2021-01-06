import image from './img/image.png';
import {TextBlock, TitleBlock, ColumnsBlock, ImageBlock} from './classes/block';

const text = `
Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus placeat minima, optio atque saepe totam, maiores ipsum modi obcaecati quia accusantium iste beatae ex sit qui distinctio aliquid est et.Doloremque voluptas at sint quis amet, ipsum minima quam temporibus officiis suscipit error architecto in consequuntur, et dolorum blanditiis reiciendis maxime ut saepe. Libero velit vero corporis earum modi molestiae. React, Vue, Angular, Node, Svelte, Express, Next, Nuxt
`

export const model = [
  new TitleBlock(
    'Vanilla JavaScript Website Builder',
    {
      tag: 'h2',
      styles:
        {
          background: 'linear-gradient(to right, #ff0099, #493240)',
          color: '#fff',
          'text-align': 'center',
          padding: '1.5rem'
        }
    }
  ),
  new ImageBlock(
    image,
    {
      styles:
        {
          padding: '2rem 0',
          display: 'flex',
          'justify-content': 'center'
        },
      imageStyles: {
        width: '500px',
        height: 'auto'
      },
      alt: 'Picture'
    }
  ),
  new ColumnsBlock(
    [
      'Pure JavaScript application, no libraries required',
      'JavaScript SOLID and OOP Principles',
      'JavaScript is simple, interesting. Learn to create any UI with your own hands'
    ],
    {
      styles:
        {
          background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
          padding: '2rem',
          color: '#fff',
          'font-weight': 'bold'
        }
    }
  ),
  new TextBlock(
    text,
    {
      styles:
        {
          background: 'linear-gradient(to left, #f2994a, #f2c94c)',
          padding: '1rem',
          'font-weight': 'bold'
        }
    }
  )
];
