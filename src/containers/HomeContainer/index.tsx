import { useState } from "react";
import { Input, Text, Button, Card, FormProgressBar } from "../../components";
import { useFormik } from "formik";
import * as yup from "yup";

interface FormProps {
	name: string;
	age: string;
	hobby: string;
	email: string;
	date: Date;
	streetAddress: string;
	city: string;
	state: string;
	zipCode: number;
	username: string;
	password: string;
}

const HomeContainer = () => {
	// useState
	const [currentStep, setCurrentStep] = useState<number>(1);

	const goToNextStep = () => {
		setCurrentStep((prevStep) => (prevStep < 3 ? prevStep + 1 : prevStep));
	};

	// Function to handle moving to the previous step
	const goToPreviousStep = () => {
		setCurrentStep((prevStep) => (prevStep > 1 ? prevStep - 1 : prevStep));
	};

	const formIk = useFormik({
		initialValues: {
			name: "",
			age: "",
			hobby: "",
			email: "",
			date: new Date(),
			streetAddress: "",
			city: "",
			state: "",
			zipCode: 0,
			username: "",
			password: "",
		},
		onSubmit: (values: FormProps) => console.log(values),
		validationSchema: yup.object({
			name: yup.string().required(),
			age: yup.string().required(),
			hobby: yup.string().required(),
			email: yup.string().email().required(),
			date: yup.date().required(),
			streetAddress: yup.string().required(),
			city: yup.string().required(),
			state: yup.string().required(),
			zipCode: yup
				.number()
				.min(10000, "Zip code must be at least 10000")
				.max(99999, "Zip code must be at least 99999"),
			username: yup.string().required(),
			password: yup
				.string()
				.min(8, "Password must be at least 8 characters")
				.matches(
					/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]+$/,
					"Password must contain at least one letter, one number, and one special character"
				),
		}),
	});

	console.log(formIk.values.date);

	return (
		<>
			<Card border={true}>
				<form onSubmit={formIk.handleSubmit}>
					{currentStep === 1 ? (
						<>
							<Text>{"Personal Information"}</Text>
							<div>
								<Text>{"Full Name"}</Text>
								<Input
									type="text"
									value={formIk.values.name}
									className="block border-neutral-400 border"
									name={"name"}
									onChange={formIk.handleChange("name")}
								/>
								{formIk.errors.name && <Text>{formIk.errors.name}</Text>}
							</div>
							<div className="my-1">
								<Text>{"Email Address"}</Text>
								<Input
									type="text"
									value={formIk.values.email}
									className="block border-neutral-400 border"
									name={"email"}
									onChange={formIk.handleChange("email")}
								/>
								{formIk.errors.email && <Text>{formIk.errors.email}</Text>}
							</div>
							<div className="my-1">
								<Text>{"Date"}</Text>
								<Input
									type="date"
									value={`${formIk.values.date.getDay()}-${formIk.values.date.getMonth()}-${formIk.values.date.getFullYear()}`}
									className="block border-neutral-400 border"
									name={"date"}
									// onChange={formIk.handleChange("date")}
									onChange={(evt) => {
										console.log(evt.target.value);
										// formIk.handleChange("date");
									}}
								/>
								{formIk.errors.date && <Text>{formIk.errors.date}</Text>}
							</div>
							<Button
								label={"Next"}
								className={"bg-green-500"}
								type="button"
								onClick={goToNextStep}
							/>
							<Text className="my-3 text-indigo-600 font-bold">{"Step 1"}</Text>
						</>
					) : currentStep === 2 ? (
						<>
							<Text>{"Address Information"}</Text>
							<div>
								<Text>{"Street Address"}</Text>
								<Input
									type="text"
									value={formIk.values.streetAddress}
									className="block border-neutral-400 border"
									name={"streetAddress"}
									onChange={formIk.handleChange("streetAddress")}
								/>
								{formIk.errors.streetAddress && (
									<Text>{formIk.errors.streetAddress}</Text>
								)}
							</div>
							<div className="my-1">
								<Text>{"City"}</Text>
								<Input
									type="text"
									value={formIk.values.city}
									className="block border-neutral-400 border"
									name={"city"}
									onChange={formIk.handleChange("city")}
								/>
								{formIk.errors.city && <Text>{formIk.errors.city}</Text>}
							</div>
							<div className="my-1">
								<Text>{"State"}</Text>
								<Input
									type="text"
									value={formIk.values.state}
									className="block border-neutral-400 border"
									name={"state"}
									onChange={formIk.handleChange("state")}
								/>
								{formIk.errors.state && <Text>{formIk.errors.state}</Text>}
							</div>
							<div className="my-1">
								<Text>{"Zip Code"}</Text>
								<Input
									type="number"
									value={formIk.values.zipCode}
									className="block border-neutral-400 border"
									name={"zipCode"}
									onChange={formIk.handleChange("zipCode")}
								/>
								{formIk.errors.zipCode && <Text>{formIk.errors.zipCode}</Text>}
							</div>
							<Button
								label={"Prev"}
								className={"bg-green-500"}
								type="button"
								onClick={goToPreviousStep}
							/>
							<Button
								label={"Next"}
								className={"bg-green-500 mx-2"}
								type="button"
								onClick={goToNextStep}
							/>
							<Text className="my-3 text-indigo-600 font-bold">{"Step 2"}</Text>
						</>
					) : (
						<>
							<Text>{"Account Information"}</Text>
							<div>
								<Text>{"Username"}</Text>
								<Input
									type="text"
									value={formIk.values.name}
									className="block border-neutral-400 border"
									name={"username"}
									onChange={formIk.handleChange("username")}
								/>
								{formIk.errors.username && (
									<Text>{formIk.errors.username}</Text>
								)}
							</div>
							<div className="my-1">
								<Text>{"Password"}</Text>
								<Input
									type="text"
									value={formIk.values.password}
									className="block border-neutral-400 border"
									name={"password"}
									onChange={formIk.handleChange("password")}
								/>
								{formIk.errors.password && (
									<Text>{formIk.errors.password}</Text>
								)}
							</div>
							<Button
								label={"Prev"}
								className={"bg-green-500"}
								type="button"
								onClick={goToPreviousStep}
							/>
							<Button
								label={"Submit"}
								type={"submit"}
								className={"bg-green-500 mx-2"}
							/>
							<Text className="my-3 text-indigo-600 font-bold">{"Step 3"}</Text>
						</>
					)}
				</form>
				<FormProgressBar currentStep={currentStep} />
			</Card>
		</>
	);
};

export default HomeContainer;
