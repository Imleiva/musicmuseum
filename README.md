# � Rock & Metal Museum

An immersive 3D virtual museum experience dedicated to rock and metal concerts. Walk through different themed rooms, explore concert posters, watch historical footage, and listen to legendary performances.

## 🌟 Features

- **3D Immersive Experience** - Navigate through realistic virtual rooms
- **Multi-Genre Themed Rooms** - Metal, Rock, and Punk dedicated spaces
- **Interactive Concert Posters** - Hover and click for detailed information
- **Video Projections** - Historical concert footage display
- **360° Navigation** - Full freedom to look around each room
- **Responsive Design** - Works on desktop and mobile devices

## � Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd musicmuseum
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

[](http://localhost:5173)

## 🎮 Controls

- **Drag** - Rotate 360° view
- **Scroll** - Zoom in/out
- **Click** - Interact with elements
- **Room Navigation** - Use top navigation bar

## 🛠️ Tech Stack

- **React 18** - UI Framework
- **React Three Fiber** - 3D Rendering
- **@react-three/drei** - 3D Utilities
- **Vite** - Build Tool & Dev Server

## 📁 Project Structure

src/
├── components/
│ ├── 3d/ # 3D scene components
│ │ ├── VenueRoom.jsx
│ │ ├── RockPoster.jsx
│ │ └── Projector.jsx
│ └── ui/ # User interface components
│ ├── PosterModal.jsx
│ └── RockNavigator.jsx
├── data/ # Concert information
│ └── concerts.js
└── assets/ # Media resources
🎨 Customization

### Adding New Concerts

Edit `src/data/concerts.js` to add new concert information:

```javascript
{
  id: unique_id,
  band: "Band Name",
  venue: "Venue Name",
  date: "YYYY-MM-DD",
  genre: "metal|rock|punk",
  description: "Concert description",
  imageUrl: "/images/poster.jpg",
  position: [x, y, z]
}
```

### Room Themes

Each room supports different color schemes and atmospheres. Modify the theme in `VenueRoom.jsx` component.

## 🚀 Deployment

1. **Build for production**

   ```bash
   npm run build
   ```

2. **Deploy the `dist` folder** to your web server

## 📱 Browser Support

- Chrome 88+
- Firefox 85+
- Safari 14+
- Edge 88+

WebGL 2.0 support required for optimal 3D performance.

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

Enjoy exploring the Leiva'n Roll Hall Of Fame!🤘
