import { ElMessage } from "element-plus";
export default function useCopy(text: string) {
  const input = document.createElement("input");
  input.value = text;
  document.body.appendChild(input);
  input.select();
  document.execCommand("Copy");
  document.body.removeChild(input);
  ElMessage({
    message: "ε€εΆζε",
    type: "success"
  });
}
