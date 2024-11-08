import React from 'react';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';

test('renders Footer component with links and images', () => {
  render(<Footer />);
  
  // Verifica que el enlace "Home" esté presente
  expect(screen.getByText('Home')).toBeInTheDocument();

  // Verifica que la imagen de Facebook se renderice
  const facebookIcon = screen.getByAltText('Facebook');
  expect(facebookIcon).toBeInTheDocument();
  expect(facebookIcon).toHaveAttribute('src', '/assets/social/facebook-white.svg');
  
  // Verifica que la imagen de la App Store se renderice
  const appStoreIcon = screen.getByAltText('App Store');
  expect(appStoreIcon).toBeInTheDocument();
  expect(appStoreIcon).toHaveAttribute('src', '/assets/store/app-store.svg');
});
