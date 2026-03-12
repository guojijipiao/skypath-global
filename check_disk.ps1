Get-ChildItem 'C:\' -Directory -Force -ErrorAction SilentlyContinue |
    Where-Object { $_.Name -notmatch '^Windows|^Program Files|^ProgramData' } |
    ForEach-Object {
        try {
            $s = (Get-ChildItem $_.FullName -Recurse -Force -ErrorAction SilentlyContinue |
                  Measure-Object -Property Length -Sum -ErrorAction SilentlyContinue).Sum
            if ($s) {
                [PSCustomObject]@{
                    Folder = $_.Name
                    SizeGB = [Math]::Round($s/1GB, 2)
                }
            }
        } catch {}
    } |
    Sort-Object SizeGB -Descending |
    Select-Object -First 15 |
    Format-Table -AutoSize
