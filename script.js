const API_BASE_URL = "https://your-vercel-app.vercel.app/api";

// 获取任务列表
async function loadTasks() {
  try {
    const response = await fetch(`${API_BASE_URL}/tasks`);
    if (!response.ok) throw new Error("获取数据失败");
    return await response.json();
  } catch (error) {
    console.error("API错误:", error);
    return [];
  }
}

// 添加新任务
async function addTask(taskData) {
  const response = await fetch(`${API_BASE_URL}/tasks`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(taskData)
  });
  return await response.json();
}

// 切换任务状态
async function toggleTaskCompletion(taskId) {
  const response = await fetch(`${API_BASE_URL}/tasks/${taskId}/complete`, {
    method: 'PUT'
  });
  return await response.json();
}