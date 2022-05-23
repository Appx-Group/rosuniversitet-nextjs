import { motion } from 'framer-motion'
import Image from 'next/image'

import PatternImg from '../../assets/images/home/shape_19.png'

const PatternThree = () => {
    return (
        <motion.div
            className='pattern-three'
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 3.5 }}
        >
            <div className='pattern-three__top'>
                <div className='pattern-three_up'>
                    <Image
                        className='pattern-three__img'
                        src={PatternImg}
                        alt='pattern three'
                        animate={{ y: [0, -20, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                            ease: 'easeIn',
                        }}
                        width={70}
                        height={70}
                    />
                </div>
            </div>
            <div className='pattern-three__top'>
                <div>
                    <Image
                        className='pattern-three__img'
                        src={PatternImg}
                        alt='pattern three'
                        width={70}
                        height={70}
                    />
                </div>
                <div className='pattern-three_right'>
                    <Image
                        className='pattern-three__img '
                        src={PatternImg}
                        alt='pattern three'
                        animate={{ x: [0, 20, 0] }}
                        transition={{
                            repeat: Infinity,
                            duration: 6,
                            ease: 'easeIn',
                        }}
                        width={70}
                        height={70}
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default PatternThree
