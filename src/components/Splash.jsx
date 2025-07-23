"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const EnvironmentalSplash = () => {
    const [loadingProgress, setLoadingProgress] = useState(0)
    const [currentStep, setCurrentStep] = useState("")

    const loadingSteps = ["Initializing...", "Loading Resources...", "Connecting Systems...", "Ready!"]

    useEffect(() => {
        const interval = setInterval(() => {
            setLoadingProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval)
                    return 100
                }
                return prev + 2
            })
        }, 20)

        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const stepIndex = Math.floor((loadingProgress / 100) * loadingSteps.length)
        if (stepIndex < loadingSteps.length) {
            setCurrentStep(loadingSteps[stepIndex])
        }
    }, [loadingProgress])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 flex items-center justify-center bg-gradient-to-br from-green-900 via-emerald-800 to-teal-900 overflow-hidden"
        >
            {/* Animated background particles */}
            <div className="absolute inset-0 opacity-20">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-green-400 rounded-full"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [-20, 20, -20],
                            opacity: [0.3, 1, 0.3],
                            scale: [0.5, 1, 0.5],
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Number.POSITIVE_INFINITY,
                            delay: Math.random() * 2,
                        }}
                    />
                ))}
            </div>

            {/* Main content */}
            <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="text-center z-10 px-8"
            >
                {/* Logo Section */}
                <motion.div
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="relative mb-8"
                >
                    <div className="relative w-32 h-32 mx-auto">
                        {/* Rotating outer ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
                            className="absolute inset-0 border-4 border-green-400/40 rounded-full border-dashed"
                        />

                        {/* Inner logo container */}
                        <div className="absolute inset-4 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white/30">
                            <motion.div
                                animate={{ scale: [1, 1.1, 1] }}
                                transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                            >
                                {/* Earth/Globe Icon */}
                                <img src="/images/IISPPR_LOGO.png" class="h-30 w-30" alt="my icon"/>
                            </motion.div>
                        </div>

                        {/* Orbiting dots */}
                        {[...Array(6)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute w-2 h-2 bg-green-400 rounded-full"
                                style={{
                                    top: "50%",
                                    left: "50%",
                                    transformOrigin: "0 0",
                                }}
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 6,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "linear",
                                    delay: i * 0.5,
                                }}
                                initial={{
                                    x: 60 * Math.cos((i * Math.PI * 2) / 6),
                                    y: 60 * Math.sin((i * Math.PI * 2) / 6),
                                }}
                            />
                        ))}
                    </div>
                </motion.div>

                {/* Title */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.6 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">IISPPR</h1>
                    <div className="w-20 h-1 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full" />
                </motion.div>

                {/* Subtitle */}
                <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                    className="mb-12"
                >
                    <p className="text-xl text-green-200 font-medium">Smart Execute Excellence</p>
                </motion.div>

                {/* Loading Progress */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 0.5 }}
                    className="w-full max-w-md mx-auto"
                >
                    {/* Progress Bar */}
                    <div className="relative mb-4">
                        <div className="w-full h-2 bg-white/20 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                                initial={{ width: 0 }}
                                animate={{ width: `${loadingProgress}%` }}
                                transition={{ duration: 0.3 }}
                            />
                        </div>
                        <div className="absolute -top-8 left-0 right-0 text-center">
                            <span className="text-white/80 text-sm font-medium">{Math.round(loadingProgress)}%</span>
                        </div>
                    </div>

                    {/* Loading Status */}
                    <motion.p
                        key={currentStep}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-white/70 text-sm font-medium tracking-wider"
                    >
                        {currentStep}
                    </motion.p>
                </motion.div>

                {/* Loading Dots */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.5 }}
                    className="mt-8 flex justify-center space-x-2"
                >
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-2 h-2 bg-green-400 rounded-full"
                            animate={{
                                scale: [1, 1.5, 1],
                                opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Number.POSITIVE_INFINITY,
                                delay: i * 0.3,
                            }}
                        />
                    ))}
                </motion.div>
            </motion.div>

            {/* Bottom wave effect */}
            <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 0.3 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-green-900/60 to-transparent"
            >
                <motion.div
                    animate={{ x: [-100, 100, -100] }}
                    transition={{
                        duration: 8,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-r from-transparent via-green-400/20 to-transparent"
                />
            </motion.div>
        </motion.div>
    )
}

export default EnvironmentalSplash
