# Restore Desktop from D backup
$desktopPath = "$env:USERPROFILE\Desktop"
$backupPath = "D:\PersonalFiles\Desktop"

Write-Host "=== Restoring Desktop Files ===" -ForegroundColor Green
Write-Host "Source: $backupPath"
Write-Host "Target: $desktopPath`n"

$items = Get-ChildItem $backupPath -Force -ErrorAction SilentlyContinue
$count = ($items | Measure-Object).Count

Write-Host "Found $count items to restore`n" -ForegroundColor Cyan

foreach ($item in $items) {
    $targetPath = Join-Path $desktopPath $item.Name

    # Skip if target already exists on current desktop
    if (Test-Path $targetPath) {
        Write-Host "  Skip: $($item.Name) (already exists)" -ForegroundColor Yellow
        continue
    }

    try {
        Copy-Item -Path $item.FullName -Destination $desktopPath -Recurse -Force
        Write-Host "  Restored: $($item.Name)" -ForegroundColor Green
    } catch {
        Write-Host "  Failed: $($item.Name) - $($_.Exception.Message)" -ForegroundColor Red
    }
}

Write-Host "`n=== Restore Complete ===" -ForegroundColor Green
Write-Host "Please refresh your desktop (press F5) to see restored files"
