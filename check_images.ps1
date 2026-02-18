
$urls = @(
    "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=400&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1503676260728-1c00e094c0d9?w=400&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=400&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1529390079861-2de3cb6e96a8?w=400&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400&h=300&fit=crop&q=80",
    "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=400&h=300&fit=crop&q=80"
)

foreach ($url in $urls) {
    $time = Measure-Command {
        try {
            $resp = Invoke-WebRequest -Uri $url -Method Head -ErrorAction Stop
            $size = $resp.Headers["Content-Length"]
            Write-Host "URL: $url"
            Write-Host "Status: $($resp.StatusCode)"
            Write-Host "Size: $size bytes"
        } catch {
            Write-Host "URL: $url"
            Write-Host "Status: FAILED"
        }
    }
    Write-Host "Time: $($time.TotalMilliseconds) ms"
    Write-Host "----------------"
}
