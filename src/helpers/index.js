import Swal from "sweetalert2";

export const getHari = (id) => {
  if (id === 1) {
    return "Senin";
  } else if (id === 2) {
    return "Selasa";
  } else if (id === 3) {
    return "Rabu";
  } else if (id === 4) {
    return "Kamis";
  } else if (id === 5) {
    return "Jumat";
  } else if (id === 6) {
    return "Sabtu";
  } else if (id === 7) {
    return "Minggu";
  }
};

export const formatDate = (date) => {
  if (date) {
    let d = String(date);
    let fullDate = d.split(" ")[0];
    let fullTime = d.split(" ")[1];
    return (
      <>
        {fullDate.split("-").reverse().join("-")}
        <br />
        {fullTime &&
          fullTime.split(":")[0] + "." + fullTime.split(":")[1] + " WITA"}
      </>
    );
  } else {
    return "";
  }
};

export const saAlert = (icon, title, text) => {
  Swal.fire({
    icon,
    title,
    text,
  });
};

export const saConfirm = (icon, title, text) => {
  return Swal.fire({
    title,
    text,
    icon,
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Lanjut",
    cancelButtonText: "Batal",
  });
};

const Toast = Swal.mixin({
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener("mouseenter", Swal.stopTimer);
    toast.addEventListener("mouseleave", Swal.resumeTimer);
  },
});

export const saToast = (icon, title) => {
  Toast.fire({
    icon,
    title,
  });
};
