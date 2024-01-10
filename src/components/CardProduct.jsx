/* eslint-disable react/prop-types */
export default function CardProduct({ data }) {
    return (
        <div className="w-full card glass">
            <figure><img src={data.thumbnail} className="object-cover object-center aspect-square" alt="car!" /></figure>
            <div className="card-body">
                <h2 className="card-title">{data.title}</h2>
                <p>{data.description}</p>
                <p>$ {data.price}</p>
                <div className="justify-end card-actions">
                    <button className="btn btn-primary">Detail</button>
                </div>
            </div>
        </div>
    )
}

