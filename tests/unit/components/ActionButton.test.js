import { render, screen } from '@testing-library/vue';
// import userEvent from '@testing-library/user-event';

import ActionButton from '@/components/ActionButton.vue';

describe('ActionButton', () => {
  it('render text', () => {
    render(ActionButton, {
      props: {
        label: 'sign in',
        type: 'primary'
      }
    });
    const button = screen.getByRole('button', {
      name: /sign in/i
    });
    expect(button).toBeInTheDocument();
  });

  it('it apllies several styles to button', () => {
    render(ActionButton, {
      props: {
        label: 'sign in',
        type: 'primary'
      }
    });

    const button = screen.getByRole('button', {
      name: /sign in/i
    });
    expect(button).toHaveClass('primary');
  });
});
