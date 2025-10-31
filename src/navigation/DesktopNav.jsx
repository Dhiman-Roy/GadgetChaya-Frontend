import React, { useState } from 'react'

function DesktopNav(props) {
    const [uniqueBrandName, setUniqueBrandName] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
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
        setSelectedCategory(category);

    }
    const brandCloseHandler = () => setShowBrand(false);
    const brandContentHandler = () => {
        setShowBrand(true);
    }
    const brandContent = uniqueBrandName.map(data => {
        return <div className='cursor-pointer' onMouseEnter={brandContentHandler} onMouseLeave={brandCloseHandler}>{data}</div>
    })

    const content = uniqueCategory.map((data) => {
        return (<div className='flex flex-col text-center'>
            <div className='cursor-pointer min-w-28' onMouseEnter={() => brandHandler(data)} onMouseLeave={brandCloseHandler}>{data}</div>
            {selectedCategory === data && showBrand && <div className='cursor-pointer' onMouseEnter={brandContentHandler} onMouseLeave={brandCloseHandler}>{brandContent}</div>}
        </div>
        )

    })

    return (<div className='flex flex-col w-full justify-between'>

        <div className='flex justify-between w-full gap-2 flex-wrap '>{content}</div>
        {/* {showBrand && (<div className='top-0 w-32 left-28' >{brandContent}</div>)} */}
    </div>
    )
}

export default DesktopNav;