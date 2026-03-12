$userProfile = $env:USERPROFILE

Write-Host "=== Documents ===" -ForegroundColor Cyan
$docSize = (Get-ChildItem "$userProfile\Documents" -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum / 1GB
Write-Host "Size: $([math]::Round($docSize, 2)) GB"
Write-Host "Subfolders:"
Get-ChildItem "$userProfile\Documents" -Directory -ErrorAction SilentlyContinue | ForEach-Object {
    $subSize = (Get-ChildItem $_.FullName -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum / 1GB
    Write-Host "  - $($_.Name): $([math]::Round($subSize, 2)) GB"
}

Write-Host "`n=== Downloads ===" -ForegroundColor Cyan
$downSize = (Get-ChildItem "$userProfile\Downloads" -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum / 1GB
Write-Host "Size: $([math]::Round($downSize, 2)) GB"

Write-Host "`n=== Desktop ===" -ForegroundColor Cyan
$deskSize = (Get-ChildItem "$userProfile\Desktop" -Recurse -ErrorAction SilentlyContinue | Measure-Object -Property Length -Sum).Sum / 1GB
Write-Host "Size: $([math]::Round($deskSize, 2)) GB"

Write-Host "`n=== Total ===" -ForegroundColor Green
Write-Host "Total to move: $([math]::Round(($docSize + $downSize + $deskSize), 2)) GB"
