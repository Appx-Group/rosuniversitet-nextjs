const errorData = {
    404: 'Not found ',
}

const ErrorPage = ({ statusCode }) => (
    <div className='error'>
        <span className='error__title'>Error {statusCode}</span>
    </div>
)

export default ErrorPage
