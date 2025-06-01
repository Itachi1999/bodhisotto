import { useForm } from "@mantine/form";
import { TextInput, PasswordInput, Paper, Title, Button, Text, Stack, Center, Alert } from "@mantine/core";
// import { useLogin } from "../hooks/useLogin";
// import { IconAlertCircle } from "@tabler/icons-react";

export const LoginForm = () => {
    const form = useForm({
        initialValues: {
            email: '',
            password: '',
        },

        validate: {
            email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
            password: (value) => (value.length >= 6 ? null : 'Password too short'),
        },
    });

    // const loginMutation = useLogin();

    //     const handleSubmit = (values: typeof form.values) => {
    //         loginMutation.mutate(values);
    //     };
    // // 
    return (
        <Center h="100vh" bg="gray.0">
            <Paper radius="md" p="xl" withBorder shadow="md" w={400}>
                <Title order={2} ta="center" mb="md">Welcome back</Title>

                {loginMutation.isError && (
                    <Alert color="red" icon={<IconAlertCircle size={16} />} mb="md">
                        {(loginMutation.error as any)?.response?.data?.message || "Login failed"}
                    </Alert>
                )}

                <form onSubmit={form.onSubmit(handleSubmit)}>
                    <Stack>
                        <TextInput
                            label="Email"
                            placeholder="you@email.com"
                            {...form.getInputProps('email')}
                        />
                        <PasswordInput
                            label="Password"
                            placeholder="Your password"
                            {...form.getInputProps('password')}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            loading={loginMutation.isPending}
                        >
                            Login
                        </Button>
                    </Stack>
                </form>

                <Text size="sm" ta="center" mt="md" c="dimmed">
                    Don’t have an account? <Text span fw={500} c="blue">Register</Text>
                </Text>
            </Paper>
        </Center>
    );
};
