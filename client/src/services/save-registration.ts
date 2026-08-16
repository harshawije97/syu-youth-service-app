"use server";

const saveRegistration = async (data: string) => {
  const res = JSON.parse(data);

  try {
    //   fetch function here
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(res),
      },
    );

    const result = await response.json();

    if(result.success === false) throw new Error(result.error);

    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default saveRegistration;
