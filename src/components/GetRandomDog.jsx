
const GetRandomDog = ({ example }) => {
    // maximum of 3 images
    // if (example.length >= 4) {
    //     example = example.splice(0, 1)
    // }
    let imagesToShow = example.slice(-3)

    return(
        <div className='randomDog'>
            {
                imagesToShow.map((image, index) => {
                    return(
                        <img src={`${image}`} key={index} style={{width: '200px', height: '150px'}}/>
                    )
                })
            }
            {/* <img src={`${example[0]}`} style={{width: '200px', height: '150px'}}/>
            <img src={`${example[1]}`} style={{width: '200px'}}/>
            <img src={`${example[2]}`} style={{width: '200px'}}/> */}
        </div>
    )
}

export default GetRandomDog