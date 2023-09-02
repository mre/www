import Image from 'next/image'

const BenefitCards = () => (
	<div className='relative'>
		<Image
			src='/images/pages/pricing/benefitBg1.png'
			alt='bg img'
			fill
			className='absolute h-auto w-[839px] -translate-y-[40%] '
		/>
		<Image
			src='/images/pages/pricing/benefitBg2.png'
			alt='bg img'
			fill
			className='absolute ml-auto h-auto w-[1244px] -translate-y-[40%] '
		/>
		<div className='mx-auto mt-24 w-full max-w-7xl px-5 sm:px-10 lg:mt-28'>
			<div className='grid gap-8 lg:grid-cols-3'>
				<div className='flex flex-col items-start justify-between bg-[#0000004D] p-6'>
					<svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M1.33594 17.5043V15.2821H9.15817V17.5043H1.33594ZM10.3582 12.3043L7.64704 9.59323L9.2026 8.03766L11.9137 10.7488L10.3582 12.3043ZM14.8915 9.5488V1.72656H17.1137V9.5488H14.8915ZM21.647 12.3043L20.0915 10.7488L22.8026 8.03766L24.3582 9.59323L21.647 12.3043ZM22.847 17.5043V15.2821H30.6693V17.5043H22.847ZM16.0026 19.9932C15.0026 19.9932 14.1526 19.6432 13.4526 18.9432C12.7526 18.2432 12.4026 17.3932 12.4026 16.3932C12.4026 15.3932 12.7526 14.5432 13.4526 13.8432C14.1526 13.1432 15.0026 12.7932 16.0026 12.7932C17.0026 12.7932 17.8526 13.1432 18.5526 13.8432C19.2526 14.5432 19.6026 15.3932 19.6026 16.3932C19.6026 17.3932 19.2526 18.2432 18.5526 18.9432C17.8526 19.6432 17.0026 19.9932 16.0026 19.9932ZM22.9137 24.8599L20.0915 22.0377L21.647 20.4821L24.4693 23.3044L22.9137 24.8599ZM9.09147 24.8599L7.53594 23.3044L10.3582 20.4821L11.9137 22.0377L9.09147 24.8599ZM14.8915 31.0599V23.2377H17.1137V31.0599H14.8915Z'
							fill='#D8D8D8'
						/>
					</svg>
					<h1>Rust, made simple</h1>
					<p>
						Effortless database connections, built-in logging, extensive docs, and cross-framework
						compatibility
					</p>
				</div>
				<div className='flex flex-col items-start justify-between bg-[#0000004D] p-6'>
					<svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M1.33594 17.5043V15.2821H9.15817V17.5043H1.33594ZM10.3582 12.3043L7.64704 9.59323L9.2026 8.03766L11.9137 10.7488L10.3582 12.3043ZM14.8915 9.5488V1.72656H17.1137V9.5488H14.8915ZM21.647 12.3043L20.0915 10.7488L22.8026 8.03766L24.3582 9.59323L21.647 12.3043ZM22.847 17.5043V15.2821H30.6693V17.5043H22.847ZM16.0026 19.9932C15.0026 19.9932 14.1526 19.6432 13.4526 18.9432C12.7526 18.2432 12.4026 17.3932 12.4026 16.3932C12.4026 15.3932 12.7526 14.5432 13.4526 13.8432C14.1526 13.1432 15.0026 12.7932 16.0026 12.7932C17.0026 12.7932 17.8526 13.1432 18.5526 13.8432C19.2526 14.5432 19.6026 15.3932 19.6026 16.3932C19.6026 17.3932 19.2526 18.2432 18.5526 18.9432C17.8526 19.6432 17.0026 19.9932 16.0026 19.9932ZM22.9137 24.8599L20.0915 22.0377L21.647 20.4821L24.4693 23.3044L22.9137 24.8599ZM9.09147 24.8599L7.53594 23.3044L10.3582 20.4821L11.9137 22.0377L9.09147 24.8599ZM14.8915 31.0599V23.2377H17.1137V31.0599H14.8915Z'
							fill='#D8D8D8'
						/>
					</svg>
					<h1>Rust, made simple</h1>
					<p>
						Effortless database connections, built-in logging, extensive docs, and cross-framework
						compatibility
					</p>
				</div>
				<div className='flex flex-col items-start justify-between bg-[#0000004D] p-6'>
					<svg width='32' height='33' viewBox='0 0 32 33' fill='none' xmlns='http://www.w3.org/2000/svg'>
						<path
							d='M1.33594 17.5043V15.2821H9.15817V17.5043H1.33594ZM10.3582 12.3043L7.64704 9.59323L9.2026 8.03766L11.9137 10.7488L10.3582 12.3043ZM14.8915 9.5488V1.72656H17.1137V9.5488H14.8915ZM21.647 12.3043L20.0915 10.7488L22.8026 8.03766L24.3582 9.59323L21.647 12.3043ZM22.847 17.5043V15.2821H30.6693V17.5043H22.847ZM16.0026 19.9932C15.0026 19.9932 14.1526 19.6432 13.4526 18.9432C12.7526 18.2432 12.4026 17.3932 12.4026 16.3932C12.4026 15.3932 12.7526 14.5432 13.4526 13.8432C14.1526 13.1432 15.0026 12.7932 16.0026 12.7932C17.0026 12.7932 17.8526 13.1432 18.5526 13.8432C19.2526 14.5432 19.6026 15.3932 19.6026 16.3932C19.6026 17.3932 19.2526 18.2432 18.5526 18.9432C17.8526 19.6432 17.0026 19.9932 16.0026 19.9932ZM22.9137 24.8599L20.0915 22.0377L21.647 20.4821L24.4693 23.3044L22.9137 24.8599ZM9.09147 24.8599L7.53594 23.3044L10.3582 20.4821L11.9137 22.0377L9.09147 24.8599ZM14.8915 31.0599V23.2377H17.1137V31.0599H14.8915Z'
							fill='#D8D8D8'
						/>
					</svg>
					<h1>Rust, made simple</h1>
					<p>
						Effortless database connections, built-in logging, extensive docs, and cross-framework
						compatibility
					</p>
				</div>
			</div>
		</div>
	</div>
)

export default BenefitCards
