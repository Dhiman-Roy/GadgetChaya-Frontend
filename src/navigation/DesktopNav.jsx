import React, { useState } from 'react'

function DesktopNav(props) {
    const [uniqueBrandName, setUniqueBrandName] = useState([]);

    const [showBrand, setShowBrand] = useState(false);
    const category = props.productData.map(data => data.category);
    const uniqueCategory = [...new Set(category)];
    console.log(uniqueCategory);
    const brandHandler = (category) => {
        const selectedCategory = props.productData.filter(data => data.category === category);
        const brandName = selectedCategory.map(data => data.brand);
        const uniqueBrand = [...new Set(brandName)];
        setUniqueBrandName(uniqueBrand);
        setShowBrand(true);

    }
    const brandCloseHandler = () => setShowBrand(false);
    const brandContentHandler = () => {
        setShowBrand(true);
    }
    const brandContent = uniqueBrandName.map(data => {
        return <div onMouseEnter={brandContentHandler} onMouseLeave={brandCloseHandler}>{data}</div>
    })

    const content = uniqueCategory.map((data) => {
        return <div>
            <div onMouseEnter={() => brandHandler(data)} onMouseLeave={brandCloseHandler}>{data}</div>

        </div>
    })

    return (<div className='flex flex-col w-full justify-between'>

        <div className='flex justify-between w-full gap-2 flex-wrap bg'>{content}</div>
        {showBrand && (<div >{brandContent}</div>)}
    </div>
    )
}

export default DesktopNav;