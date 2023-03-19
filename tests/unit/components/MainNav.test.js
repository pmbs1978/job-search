import { render, screen } from '@testing-library/vue';

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
});
