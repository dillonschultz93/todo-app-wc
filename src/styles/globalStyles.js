import { css } from 'lit';

export const reset = css`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  /* Remove default margin */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
    font-size: 16px;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`;

export const baseStyles = css`
  .container {
    max-width: 100%;
    margin: 0 auto;
    padding: 0 1rem;
  }

  @media (min-width: 640px) {
    .container {
      max-width: 36rem;
    }
  }

  @media (min-width: 768px) {
    .container {
      max-width: 36rem;
    }
  }
`;

export const tokens = css`
  :host {
    /* Color styles */
    --gray--0: hsla(0, 0%, 97.6%, 1);
    --gray--1: hsla(210, 5.6%, 92.9%, 1);
    --gray--2: hsla(220, 4.9%, 88%, 1);
    --gray--3: hsla(200, 3.4%, 82.5%, 1);
    --gray--4: hsla(216, 4.2%, 76.7%, 1);
    --gray--5: hsla(210, 3.9%, 70.2%, 1);
    --gray--6: hsla(210, 4.2%, 62.7%, 1);
    --gray--7: hsla(213, 3.8%, 53.9%, 1);
    --gray--8: hsla(213, 5.1%, 42.5%, 1);
    --gray--9: hsla(214, 10.9%, 25.1%, 1);
    --blue--0: hsla(214, 100%, 95.5%, 1);
    --blue--1: hsla(214, 100%, 90.8%, 1);
    --blue--2: hsla(214, 100%, 85.5%, 1);
    --blue--3: hsla(214, 100%, 79.4%, 1);
    --blue--4: hsla(214, 100%, 72.4%, 1);
    --blue--5: hsla(214, 100%, 63.3%, 1);
    --blue--6: hsla(214, 77.2%, 57.1%, 1);
    --blue--7: hsla(214, 58.3%, 49.8%, 1);
    --blue--8: hsla(214, 58.1%, 41.2%, 1);
    --blue--9: hsla(214, 58.7%, 29.4%, 1);
    --indigo--0: hsla(243, 100%, 96.3%, 1);
    --indigo--1: hsla(244, 100%, 92.2%, 1);
    --indigo--2: hsla(244, 100%, 87.5%, 1);
    --indigo--3: hsla(244, 100%, 82%, 1);
    --indigo--4: hsla(244, 100%, 74.7%, 1);
    --indigo--5: hsla(244, 100%, 63.3%, 1);
    --indigo--6: hsla(244, 76.4%, 56.9%, 1);
    --indigo--7: hsla(244, 58.1%, 49.6%, 1);
    --indigo--8: hsla(244, 58.5%, 40.6%, 1);
    --indigo--9: hsla(244, 58.6%, 28.4%, 1);
    --violet--0: hsla(273, 100%, 96.1%, 1);
    --violet--1: hsla(274, 100%, 92%, 1);
    --violet--2: hsla(274, 100%, 87.1%, 1);
    --violet--3: hsla(274, 100%, 81.4%, 1);
    --violet--4: hsla(274, 100%, 74.1%, 1);
    --violet--5: hsla(274, 100%, 63.3%, 1);
    --violet--6: hsla(274, 77.2%, 57.1%, 1);
    --violet--7: hsla(274, 58.3%, 49.8%, 1);
    --violet--8: hsla(274, 58.1%, 41.2%, 1);
    --violet--9: hsla(274, 58.4%, 29.2%, 1);
    --fuchsia--0: hsla(306, 100%, 96.3%, 1);
    --fuchsia--1: hsla(304, 100%, 92.2%, 1);
    --fuchsia--2: hsla(305, 100%, 87.6%, 1);
    --fuchsia--3: hsla(304, 100%, 82%, 1);
    --fuchsia--4: hsla(304, 100%, 74.9%, 1);
    --fuchsia--5: hsla(304, 100%, 63.3%, 1);
    --fuchsia--6: hsla(304, 77.2%, 57.1%, 1);
    --fuchsia--7: hsla(304, 58.3%, 50.2%, 1);
    --fuchsia--8: hsla(304, 58.5%, 41.6%, 1);
    --fuchsia--9: hsla(304, 58.2%, 30%, 1);
    --pink--0: hsla(335, 100%, 96.3%, 1);
    --pink--1: hsla(335, 100%, 92.2%, 1);
    --pink--2: hsla(335, 100%, 87.5%, 1);
    --pink--3: hsla(334, 100%, 81.8%, 1);
    --pink--4: hsla(334, 100%, 74.7%, 1);
    --pink--5: hsla(334, 100%, 63.3%, 1);
    --pink--6: hsla(334, 77.2%, 57.1%, 1);
    --pink--7: hsla(334, 58.4%, 50%, 1);
    --pink--8: hsla(334, 58.3%, 41.4%, 1);
    --pink--9: hsla(334, 57.9%, 29.8%, 1);
    --red--0: hsla(6, 100%, 96.1%, 1);
    --red--1: hsla(4, 100%, 92%, 1);
    --red--2: hsla(4, 100%, 87.3%, 1);
    --red--3: hsla(4, 100%, 81.6%, 1);
    --red--4: hsla(4, 100%, 74.3%, 1);
    --red--5: hsla(4, 100%, 63.3%, 1);
    --red--6: hsla(4, 77.2%, 57.1%, 1);
    --red--7: hsla(4, 58.4%, 50%, 1);
    --red--8: hsla(4, 58.3%, 41.4%, 1);
    --red--9: hsla(3, 57.9%, 29.8%, 1);
    --orange--0: hsla(34, 100%, 95.1%, 1);
    --orange--1: hsla(34, 100%, 90%, 1);
    --orange--2: hsla(34, 100%, 84.3%, 1);
    --orange--3: hsla(34, 100%, 78.2%, 1);
    --orange--4: hsla(34, 100%, 71.4%, 1);
    --orange--5: hsla(34, 100%, 63.3%, 1);
    --orange--6: hsla(34, 77.2%, 57.1%, 1);
    --orange--7: hsla(34, 58.3%, 50.2%, 1);
    --orange--8: hsla(34, 58.5%, 41.6%, 1);
    --orange--9: hsla(34, 58.2%, 30%, 1);
    --yellow--0: hsla(66, 100%, 95.9%, 1);
    --yellow--1: hsla(64, 100%, 91.4%, 1);
    --yellow--2: hsla(64, 100%, 86.5%, 1);
    --yellow--3: hsla(64, 100%, 80.4%, 1);
    --yellow--4: hsla(64, 100%, 73.1%, 1);
    --yellow--5: hsla(64, 100%, 63.3%, 1);
    --yellow--6: hsla(64, 78%, 57.3%, 1);
    --yellow--7: hsla(64, 58.9%, 50.4%, 1);
    --yellow--8: hsla(64, 57.9%, 42%, 1);
    --yellow--9: hsla(64, 58.7%, 30.4%, 1);
    --lime--0: hsla(95, 100%, 95.7%, 1);
    --lime--1: hsla(95, 100%, 91%, 1);
    --lime--2: hsla(95, 100%, 85.7%, 1);
    --lime--3: hsla(94, 100%, 79.6%, 1);
    --lime--4: hsla(94, 100%, 72.4%, 1);
    --lime--5: hsla(94, 100%, 63.3%, 1);
    --lime--6: hsla(94, 78%, 57.3%, 1);
    --lime--7: hsla(94, 58.9%, 50.4%, 1);
    --lime--8: hsla(94, 57.9%, 42%, 1);
    --lime--9: hsla(94, 58.7%, 30.4%, 1);
    --green--0: hsla(123, 100%, 96.3%, 1);
    --green--1: hsla(124, 100%, 92.2%, 1);
    --green--2: hsla(124, 100%, 87.5%, 1);
    --green--3: hsla(124, 100%, 82%, 1);
    --green--4: hsla(124, 100%, 74.7%, 1);
    --green--5: hsla(124, 100%, 63.3%, 1);
    --green--6: hsla(124, 78%, 57.3%, 1);
    --green--7: hsla(124, 58.9%, 50.4%, 1);
    --green--8: hsla(124, 57.9%, 42%, 1);
    --green--9: hsla(124, 58.7%, 30.4%, 1);
    --teal--0: hsla(153, 100%, 96.1%, 1);
    --teal--1: hsla(154, 100%, 91.8%, 1);
    --teal--2: hsla(154, 100%, 87.1%, 1);
    --teal--3: hsla(153, 100%, 81.4%, 1);
    --teal--4: hsla(154, 100%, 74.1%, 1);
    --teal--5: hsla(154, 100%, 63.3%, 1);
    --teal--6: hsla(154, 78%, 57.3%, 1);
    --teal--7: hsla(154, 58.9%, 50.4%, 1);
    --teal--8: hsla(154, 57.9%, 42%, 1);
    --teal--9: hsla(154, 58.7%, 30.4%, 1);
    --cyan--0: hsla(186, 100%, 95.9%, 1);
    --cyan--1: hsla(184, 100%, 91.4%, 1);
    --cyan--2: hsla(184, 100%, 86.3%, 1);
    --cyan--3: hsla(184, 100%, 80.4%, 1);
    --cyan--4: hsla(184, 100%, 73.1%, 1);
    --cyan--5: hsla(184, 100%, 63.3%, 1);
    --cyan--6: hsla(184, 78%, 57.3%, 1);
    --cyan--7: hsla(184, 58.9%, 50.4%, 1);
    --cyan--8: hsla(184, 57.9%, 42%, 1);
    --cyan--9: hsla(183, 58.4%, 30.2%, 1);

    /* Text-size styles */
    /* base size: body---regular (16px) */
    --jumbo: 3rem;
    --large: 2.5rem;
    --h1: 2rem;
    --h2: 1.5rem;
    --h3: 1.25rem;
    --h4: 1.12rem;
    --h5: 1rem;
    --body: 1rem;
    --small--body: 0.88rem;

    --font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;

    /* Effect styles */
    --shadow---medium: 0px 16px 8px rgba(57, 63, 71, 0.04),
      0px 8px 8px rgba(57, 63, 71, 0.04), 0px 4px 4px rgba(57, 63, 71, 0.04),
      0px 2px 2px rgba(57, 63, 71, 0.04), 0px 1px 1px rgba(57, 63, 71, 0.1);
    --shadow---short: 0px 4px 5px rgba(57, 63, 71, 0.02),
      0px 3px 4px rgba(57, 63, 71, 0.02), 0px 2px 3px rgba(57, 63, 71, 0.02),
      0px 1px 2px rgba(57, 63, 71, 0.02), 0px 1px 1px rgba(57, 63, 71, 0.1);
  }
`;
