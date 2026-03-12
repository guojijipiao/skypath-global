# Personal File Migration Script
# Option 2: Only move personal files (Downloads, Desktop, and root-level Documents)

$userProfile = $env:USERPROFILE
$targetDrive = "D:"

Write-Host "=== Starting Migration ===" -ForegroundColor Green
Write-Host "Source: $userProfile"
Write-Host "Target: $targetDrive`n"

# Create target folders
$targetBase = "$targetDrive\PersonalFiles"
New-Item -ItemType Directory -Path "$targetBase\Documents" -Force | Out-Null
New-Item -ItemType Directory -Path "$targetBase\Downloads" -Force | Out-Null
New-Item -ItemType Directory -Path "$targetBase\Desktop" -Force | Out-Null

Write-Host "[1/3] Moving Downloads..." -ForegroundColor Cyan
$downloadsPath = "$userProfile\Downloads"
$targetDownloads = "$targetBase\Downloads"
if ((Get-ChildItem $downloadsPath -Force -ErrorAction SilentlyContinue | Measure-Object).Count -gt 0) {
    Copy-Item -Path "$downloadsPath\*" -Destination $targetDownloads -Recurse -Force
    Remove-Item -Path "$downloadsPath\*" -Recurse -Force
    cmd /c "mklink /D `"$downloadsPath`" `"$targetDownloads`"" 2>$null
    Write-Host "  Done: Downloads" -ForegroundColor Green
} else {
    Write-Host "  Skipped: Downloads is empty" -ForegroundColor Yellow
}

Write-Host "[2/3] Moving Desktop..." -ForegroundColor Cyan
$desktopPath = "$userProfile\Desktop"
$targetDesktop = "$targetBase\Desktop"
if ((Get-ChildItem $desktopPath -Force -ErrorAction SilentlyContinue | Measure-Object).Count -gt 0) {
    Copy-Item -Path "$desktopPath\*" -Destination $targetDesktop -Recurse -Force
    Remove-Item -Path "$desktopPath\*" -Recurse -Force
    cmd /c "mklink /D `"$desktopPath`" `"$targetDesktop`"" 2>$null
    Write-Host "  Done: Desktop" -ForegroundColor Green
} else {
    Write-Host "  Skipped: Desktop is empty" -ForegroundColor Yellow
}

Write-Host "[3/3] Moving Documents root files..." -ForegroundColor Cyan
$documentsPath = "$userProfile\Documents"
$targetDocuments = "$targetBase\Documents"

# App folders to keep
$appFolders = @("360js Files", "CADCloudDisk", "CFSystem", "DSeeTem", "DWGCloudGallery",
                "insta360", "leidian9", "MyCAD", "Sunlogin Files", "Tencent Files",
                "WebView", "WPS", "WPS Cloud Files", "WPSDrive", "WXWork",
                "Youtube Videos", "Youtube", "iQiyi", " 自定义 Office 模板")

$itemsToMove = Get-ChildItem $documentsPath -Force -ErrorAction SilentlyContinue | Where-Object {
    $appFolders -notcontains $_.Name
}

$movedCount = 0
if ($itemsToMove) {
    foreach ($item in $itemsToMove) {
        Write-Host "  Moving: $($item.Name)..."
        Copy-Item -Path $item.FullName -Destination $targetDocuments -Recurse -Force -ErrorAction SilentlyContinue
        Remove-Item -Path $item.FullName -Recurse -Force -ErrorAction SilentlyContinue
        $movedCount++
    }
    Write-Host "  Done: $movedCount items moved" -ForegroundColor Green
} else {
    Write-Host "  Skipped: No items to move" -ForegroundColor Yellow
}

Write-Host "`n=== Migration Complete ===" -ForegroundColor Green
Write-Host "Files moved to: $targetBase"
Write-Host ""
Write-Host "Note: App folders (Tencent Files, WPS Drive, etc.) kept in original location"
