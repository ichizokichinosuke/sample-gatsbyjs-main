const React = require("react")
const gatsby = require("gatsby")

module.exports = {
    ...gatsby,
    graphql: jest.fn(),
    Link: jest.fn().mockImplementation(
        // these props are invalid for an `a` tag
        ({
            activeClassName,
            activeStyle,
            getProps,
            innerRef,
            partialActive,
            ref,
            replace,
            to,
            ...rest
        }) => React.createElement("a", {
            ...rest,
            href: to,
        })
    ),
    StaticQuery: jest.fn(),
    useStaticQuery: jest.fn(),
}
