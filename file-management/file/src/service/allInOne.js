import { useDataStore } from "./store";
const DATA_URL = "http://localhost:4000/data";

export async function addToExplorer(userId) {
  const res = await fetch(`${DATA_URL}/${userId}`);
  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();

  return data;
}

export async function allUser() {
  const res = await fetch(`${DATA_URL}`);
  if (!res.ok) throw new Error("Failed to fetch");

  const data = await res.json();

  return data;
}




export async function updateUserFile(userId, fileManager) {
  const url = `${DATA_URL}/${userId}`;
  console.log(fileManager);
  const patchData = { fileManager: fileManager };

  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(patchData),
    });

    if (!response.ok) {
      throw new Error("Failed to update user file");
    }

    const updatedUserData = await response.json();
    console.log("User data after update:", updatedUserData);
    return updatedUserData;
  } catch (error) {
    console.error("Error updating user file:", error);
  }
}


export async function createUser(user) {
  const res = await fetch(`${DATA_URL}`, {
    method: "POST",
    headers: {
      "Content-Type": "Application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Failed to create user");
}



export async function authentication(user, userAction) {
  const { name, password } = user;
  const data = await allUser();

  if (userAction === "signUp") {
    const isUserNameTaken = data.find((user) => user.name === name);
    if (isUserNameTaken) return true;
    else return false;
  } else {
    const signUpBefore = data.find(
      (user) => user.name === name && user.password === password
    );

    if (signUpBefore) return true;
    else return false;
  }
  // const dataStore = useDataStore();
  // dataStore.isSignUp(signUpBefore);
}
