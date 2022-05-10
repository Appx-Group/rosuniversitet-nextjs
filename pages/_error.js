import React from 'react'

class E extends React.Component {
    static getInitialProps({ res, err }) {
        const status = res ? res.statusCode : err ? err.statusCode : null
        return { status }
    }

    render() {
        const { status } = this.props
        return <h1>{status}</h1>
    }
}

export default E
