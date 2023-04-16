//Import react library
import React from 'react';

//Import PropTypes package which provides runtime type checking for React props
import PropTypes from 'prop-types';

//Import clsx which is an utility library for generating CSS class names in JavaScript.
import clsx from 'clsx';

//Import next router
import { useRouter } from 'next/router';

//Import next link.
import NextLink from 'next/link';

//Import Material UI Link
import MuiLink from '@mui/material/Link';

//Import MUI5 library which provides a styled function to create styled components
import { styled } from '@mui/material/styles';

//Add support for the sx prop for consistency with the other branches.
const Anchor = styled('a')({});

export const NextLinkComposed = React.forwardRef(function NextLinkComposed(
  props,
  ref
) {
  const { to, linkAs, replace, scroll, shallow, prefetch, locale, ...other } =
    props;

  return (
    <NextLink
      href={to}
      prefetch={prefetch}
      as={linkAs}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      passHref
      locale={locale}
    >
      <Anchor ref={ref} {...other} />
    </NextLink>
  );
});

NextLinkComposed.propTypes = {
  href: PropTypes.any,
  linkAs: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  locale: PropTypes.string,
  passHref: PropTypes.bool,
  prefetch: PropTypes.bool,
  replace: PropTypes.bool,
  scroll: PropTypes.bool,
  shallow: PropTypes.bool,
  to: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

//A styled version of the Next.js Link component:
//https://nextjs.org/docs/api-reference/next/link
const CustomNextLink = React.forwardRef(function Link(props, ref) {
  const {
    activeClassName = 'active',
    as,
    className: classNameProps,
    href,
    linkAs: linkAsProp,
    locale,
    noLinkStyle,
    prefetch,
    replace,
    role, // Link don't have roles.
    scroll,
    shallow,
    ...other
  } = props;

  const router = useRouter();
  const pathname = typeof href === 'string' ? href : href.pathname;
  const className = clsx(classNameProps, {
    [activeClassName]: router.pathname === pathname && activeClassName,
  });

  const isExternal =
    typeof href === 'string' &&
    (href.indexOf('http') === 0 || href.indexOf('mailto:') === 0);

  if (isExternal) {
    if (noLinkStyle) {
      return <Anchor className={className} href={href} ref={ref} {...other} />;
    }

    return <MuiLink className={className} href={href} ref={ref} {...other} />;
  }

  const linkAs = linkAsProp || as;
  const nextjsProps = {
    to: href,
    linkAs,
    replace,
    scroll,
    shallow,
    prefetch,
    locale,
  };

  if (noLinkStyle) {
    return (
      <NextLinkComposed
        className={className}
        ref={ref}
        {...nextjsProps}
        {...other}
      />
    );
  }

  return (
    <MuiLink
      component={NextLinkComposed}
      className={className}
      ref={ref}
      {...nextjsProps}
      {...other}
    />
  );
});

CustomNextLink.propTypes = {
  activeClassName: PropTypes.string,
  as: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.string,
  href: PropTypes.any,
  linkAs: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  locale: PropTypes.string,
  noLinkStyle: PropTypes.bool,
  prefetch: PropTypes.bool,
  replace: PropTypes.bool,
  role: PropTypes.string,
  scroll: PropTypes.bool,
  shallow: PropTypes.bool,
};

export default CustomNextLink;
