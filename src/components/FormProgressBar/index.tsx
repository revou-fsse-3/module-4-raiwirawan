interface Props {
	currentStep: number;
}

const FormProgressBar = ({ currentStep }: Props) => {
	return (
		<div className="w-full bg-gray-200 rounded-full my-3">
			<div
				className={`bg-blue-500 text-xs leading-none py-1 text-center text-white rounded-full ${
					currentStep === 1 ? "w-1/3" : currentStep === 2 ? "w-2/3" : "w-full"
				}`}
				style={{ width: `${(currentStep / 3) * 100}%` }}
			>
				{/* Display step indicators */}
				<span className="absolute left-0 top-0 mt-2 ml-4">Step 1</span>
				<span className="absolute top-0 mt-2 left-1/2 transform -translate-x-1/2">
					Step 2
				</span>
				<span className="absolute right-0 top-0 mt-2 mr-4">Step 3</span>
			</div>
		</div>
	);
};

export default FormProgressBar;
