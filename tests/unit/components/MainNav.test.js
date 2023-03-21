import { render, screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';

import MainNav from '@/components/MainNav.vue';

describe('MainNav', () => {
  it('it display company name', () => {
    render(MainNav);
    // screen.debug()
    const companyName = screen.getByText('PMBS careers');
    expect(companyName).toBeInTheDocument();
  });

  it('Display items for navigation', () => {
    render(MainNav);

    const navigationMenuItems = screen.getAllByRole('listitem');

    const navigationMenuNames = navigationMenuItems.map((item) => {
      return item.textContent;
    });

    expect(navigationMenuNames).toEqual([
      'Teams',
      'Locations',
      'Live at PMBS Corp',
      'How we hired',
      'Students',
      'Jobs'
    ]);
  });

  describe('when user log in', () => {
    it('displays user profile image', async () => {
      render(MainNav);
      let profileImage = screen.queryByRole('img', {
        name: /profile image/i
      });
      expect(profileImage).not.toBeInTheDocument();

      let logButton = screen.getByRole('button', {
        name: /sign in/i
      });
      await userEvent.click(logButton);
      profileImage = screen.queryByRole('img', {
        name: /profile image/i
      });
      expect(profileImage).toBeInTheDocument();

      profileImage = screen.queryByRole('img', {
        name: /profile image/i
      });
      await userEvent.click(profileImage);
      logButton = screen.getByRole('button', {
        name: /sign in/i
      });
      expect(logButton).toBeInTheDocument();
    });
  });
});
