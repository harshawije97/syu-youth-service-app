// Get all data from API
export const getAllData = async () => {
  const res = await fetch(
    `https://syu-youth-service-app-production.up.railway.app/responses/all`,
  );
  return res.json();
};

export const saveAttendance = async (data: any) => {
  const updateData = {
    id: data.id,
    fullName: data.name,
    contactNo: data.contact,
  };

  try {
    const res = await fetch(
      `https://syu-youth-service-app-production.up.railway.app/attendance`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updateData),
      },
    );
    if (!res.ok) throw new Error(res.statusText);

    return res.json();
  } catch (error) {
    console.error(error);
  }
};

// Get all users
export const getAllUsers = async () => {
  try {
    const res = await fetch(
      `https://syu-youth-service-app-production.up.railway.app/users`,
    );
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

// Get user by id
export const getUserById = async (id: string) => {
  try {
    const res = await fetch(
      `https://syu-youth-service-app-production.up.railway.app/users/${id}`,
    );
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
