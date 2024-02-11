import '../Pagination/Pagination.css'

function Pagination({ usersPerPage, totalUsers, paginate }) {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
        pageNumbers.push(i)
    }
    return (
        <>
        <div className='pagination_container'>
            {
                pageNumbers.map(number => (
                    <div className='pagination_number' key={number}>
                        <a href="!#" onClick={() => paginate(number)}>
                            {number}
                        </a>
                    </div>
                ))
            }
        </div>
        </>
    )
}

export default Pagination